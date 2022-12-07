const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const college = require('./router/college');
const student = require('./router/student');
const login = require('./router/login');
const categories = require('./router/category');
const states = require('./router/state');
const services = require('./router/service');
const city = require('./router/city.js');
const {
  config: { API_VERSION, DB_STRING, NODE_ENV, PORT },
} = require('./config');

const app = express();
app.use(express.json());
const corsOptions = {
  exposedHeaders: 'auth',
};
app.use(cors(corsOptions));
// router
app.use(`${API_VERSION}/categoryImages/:id`, (req, res) => {
  res.sendFile(path.join(__dirname, `categoryImages/${req.params.id}.png`));
});
app.use(`${API_VERSION}/college`, college);
app.use(`${API_VERSION}/student`, student);
app.use(`${API_VERSION}/login`, login);
app.use(`${API_VERSION}/categories`, categories);
app.use(`${API_VERSION}/states`, states);
app.use(`${API_VERSION}/services`, services);
app.use(`${API_VERSION}/city`, city);

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  );
}

//database connection
try {
  if (DB_STRING !== '<YOUR_DB_STRING>') {
    mongoose.connect(DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    console.log(process.env.NODE_ENV);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('database connect....');
    });
  } else {
    console.log('Please Provide Valid DB STRING');
  }
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
