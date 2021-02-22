const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const Addresses = require("./schemas/Address");
const Categories = require("./schemas/Category");
const Cities = require("./schemas/City");
const Countries = require("./schemas/Country");
const Merchants = require("./schemas/Merchant");
const Services = require("./schemas/Services");
const States = require("./schemas/State");
const Tag = require("./schemas/Tags");
const college = require("./router/college");
const student = require("./router/student");
const login = require("./router/login");
const categories = require("./router/category");
const states = require("./router/state");
const services = require("./router/service");

const apiVersion = process.env.API_VERSION || "/v1";
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
const corsOptions = {
  exposedHeaders: "auth",
};
app.use(cors(corsOptions));
// router
app.use(`${apiVersion}/college`, college);
app.use(`${apiVersion}/student`, student);
app.use(`${apiVersion}/login`, login);
app.use(`${apiVersion}/categories`, categories);
app.use(`${apiVersion}/states`, states);
app.use(`${apiVersion}/services`, services);

// app.use(`${apiVersion}/testing`, async () => {
//   const address = await Addresses.find();
//   const tags = await Tag.find();
//   const state = await States.find();
//   const categories = await Categories.find();
//   const services = await Services.find();
//   const merchant = await Merchants.find();
//   const city = await Cities.find();
//   const countries = await Countries.find();
//   console.log(
//     "Address",
//     address,
//     tags,
//     state,
//     categories,
//     services,
//     merchant,
//     city,
//     countries
//   );
// });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//database connection

mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connect....");
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
