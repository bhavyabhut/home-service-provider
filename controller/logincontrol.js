const User = require("../schemas/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const client = require("twilio")(process.env.accountSid, process.env.authToken);

exports.singin = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      msg: "email or password not empty",
    });
  }
  if (req.body.email.trim() === "" || req.body.password.trim() === "") {
    return res.status(400).json({
      success: false,
      msg: "email or password not empty",
    });
  }
  const user = await User.find({ email: req.body.email });
  if (user.length === 0) {
    return res.status(400).json({
      success: false,
      msg: "Wrong email or password",
    });
  }
  bcrypt.compare(req.body.password, user[0].password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: "SERVER ERROR",
      });
    }
    if (isMatch) {
      const token = jwt.sign({ id: user[0]._id }, process.env.SECREATE, {
        expiresIn: 60 * 60,
      });
      res.header({ Auth: token });
      res.status(200).json({
        success: true,
        data: user[0],
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Wrong email or password",
      });
    }
  });
};

exports.singup = async (req, res, next) => {
  // client.messages
  // 	.create({
  // 		body: `
  // 			Congratulation successfull register with BHAVYA's app...
  // 			Email :${req.body.email}
  // 			Password :${req.body.password}
  // 			please dont share this msg with anybody...
  // 			..THANK U FOR JOIN US..`,
  // 		from: "+12029331491",
  // 		to: `+91${req.body.number}`,
  // 	})
  // 	.then((messages) => console.log(messages));

  if (req.body.password.trim().length < 9) {
    return res.status(400).send({
      success: false,
      msg: "Password not strong",
    });
  }
  const user = await User.find({ email: req.body.email });
  if (user.length !== 0) {
    return res.status(400).send({
      success: false,
      msg: "Email alerdy taken",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      number: req.body.number,
    });
    const data = await user.save();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    if (e.name === "ValidationError") {
      const messages = Object.values(e.errors).map((val) => val.message);
      res.status(400).json({
        success: false,
        msg: messages[0],
      });
    } else {
      res.status(500).json({
        success: false,
        msg: "SERVER ERROR",
      });
    }
  }
};

exports.auth = async (req, res, next) => {
  const token = req.headers["auth-token"];
  if (token === "0") {
    console.log(token);
    return res.status(401).json({
      success: false,
      msg: "UNAUTHORIZED",
    });
  }
  if (token) {
    try {
      const verify = jwt.verify(token, process.env.SECREATE);
      if (verify.id) {
        const user = await User.findById(verify.id);
        if (user) {
          res.status(200).json({
            success: true,
            data: user,
          });
        } else {
          return res.status(200).json({
            success: false,
            msg: "User not Found",
          });
        }
      }
    } catch (e) {
      return res.status(200).json({
        success: false,
        msg: "Session Time Out ",
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      msg: "User Log Out ",
    });
  }
};
