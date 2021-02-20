const login = require("express").Router();
const { singin, singup, auth } = require("../controller/logincontrol.js");
login.route("/").post(singin);
login.route("/registration").post(singup);
login.route("/auth").get(auth);

module.exports = login;
