const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const college = require("./router/college");
const student = require("./router/student");

const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}
const apiVersion = process.env.API_VERSION || "/v1";
const port = process.env.PORT || 5000;

// router
app.use(`${apiVersion}/college`, college);
app.use(`${apiVersion}/student`, student);

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
