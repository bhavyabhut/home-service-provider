const User = require('../schemas/UserModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

exports.singin = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      msg: 'email or password not empty',
    });
  }
  if (req.body.email.trim() === '' || req.body.password.trim() === '') {
    return res.status(400).json({
      success: false,
      msg: 'email or password not empty',
    });
  }
  const user = await User.find({ email: req.body.email });
  if (user.length === 0) {
    return res.status(400).json({
      success: false,
      msg: 'Wrong email or password',
    });
  }
  bcrypt.compare(req.body.password, user[0].password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: 'SERVER ERROR',
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
        msg: 'Wrong email or password',
      });
    }
  });
};

exports.singup = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      msg: 'email or password not empty',
    });
  }
  if (req.body.password.trim().length < 6) {
    return res.status(400).send({
      success: false,
      msg: 'Password not strong',
    });
  }
  const user = await User.find({ email: req.body.email });
  if (user.length !== 0) {
    return res.status(400).send({
      success: false,
      msg: 'Email alerdy taken',
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
      isMerchant: req.body.isMerchant,
    });
    const data = await user.save();
    const mailOptions = {
      from: 'greatmastu',
      to: req.body.email,
      subject: 'Successfully Registered on HomeServices Provider',
      html: ` <div
      style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        align-items: center;
      "
      }
    >
    <br/>
      <span style="font-size: 2rem; font-weight: bold; margin-bottom: 2rem"
        >Hello ${req.body.name}</span
      >
    <br/>
  
      <span style="color: grey; margin-bottom: 0.75rem"
        >Congratulations for choosing us </span
      >
    <br/>
  
      <span style="font-size: 1.5rem; font-weight: bold">Thank you</span>
    </div>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map((val) => val.message);
      res.status(400).json({
        success: false,
        msg: messages[0],
      });
    } else {
      res.status(500).json({
        success: false,
        msg: 'SERVER ERROR',
      });
    }
  }
};

exports.auth = async (req, res, next) => {
  const token = req.headers['auth-token'];
  if (token === '0') {
    console.log(token);
    return res.status(401).json({
      success: false,
      msg: 'UNAUTHORIZED',
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
            msg: 'User not Found',
          });
        }
      }
    } catch (e) {
      return res.status(200).json({
        success: false,
        msg: 'Session Time Out ',
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      msg: 'User Log Out ',
    });
  }
};

const generateOTP = () => {
  // Declare a digits variable
  // which stores all digits
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.otp = async (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({
      success: false,
      msg: 'email  not empty',
    });
  }
  if (req.body.email.trim() === '') {
    return res.status(400).json({
      success: false,
      msg: 'email  not empty',
    });
  }
  const userEmail = await User.find({ email: req.body.email });
  if (userEmail.length === 0) {
    return res.status(400).json({
      success: false,
      msg: 'User not found',
    });
  }
  const otp = generateOTP();

  const mailOptions = {
    from: 'greatmastu',
    to: userEmail[0].email,
    subject: 'OTP verification for reset/forgot password',
    html: ` <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
    "
    }
  >
  <br/>
    <span style="font-size: 2rem; font-weight: bold; margin-bottom: 2rem"
      >Hello ${userEmail[0].name}</span
    >
  <br/>

    <span style="color: grey; margin-bottom: 0.75rem"
      >Otp for reset password</span
    >
  <br/>

    <span style="font-size: 1.5rem; font-weight: bold">${otp}</span>
  </div>`,
  };

  if (userEmail[0]) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    const user = await User.findById(userEmail[0]._id);
    user.otp = otp;
    user.otpTimeOut = new Date();
    user.isOtpVerify = false;

    const newUser = await user.save();
    res.status(200).json({
      success: true,
      data: newUser,
      message: 'Otp Send Successfully',
    });
  }
};

exports.verifyOtp = async (req, res, next) => {
  if (!req.body.otp) {
    return res.status(400).json({
      success: false,
      msg: 'otp  not empty',
    });
  }
  if (req.body.otp.trim() === '') {
    return res.status(400).json({
      success: false,
      msg: 'otp  not empty',
    });
  }
  const userEmail = await User.find({ otp: req.body.otp });
  console.log(userEmail);
  if (userEmail.length === 0) {
    return res.status(400).json({
      success: false,
      msg: 'Wrong Otp',
    });
  }
  const otpDate = userEmail[0].otpTimeOut;
  const currentDate = new Date();
  let milliSecond = 1000000000;
  if (otpDate) milliSecond = currentDate.getTime() - otpDate.getTime();
  console.log(
    'time nu',
    otpDate,
    currentDate,
    otpDate.getTime(),
    currentDate.getTime(),
  );
  const second = milliSecond / 1000;
  if (second > 120) {
    return res.status(400).json({
      success: false,
      msg: 'Otp is Expired',
    });
  }
  if (userEmail[0]) {
    const user = await User.findById(userEmail[0]._id);
    user.isOtpVerify = true;
    // user.otp = null;
    // user.otpTimeOut = null;
    const newUser = await user.save();
    res.status(200).json({
      success: true,
      data: newUser,
      message: 'Successfully Verify Otp',
    });
  }
};

exports.changePassword = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      msg: 'email or password not empty',
    });
  }
  if (req.body.password.trim().length < 6) {
    return res.status(400).send({
      success: false,
      msg: 'Password not strong',
    });
  }
  const user = await User.find({ email: req.body.email });
  if (user.length === 0) {
    return res.status(400).send({
      success: false,
      msg: 'No User found',
    });
  }
  console.log(user);
  if (user[0].isOtpVerify === false) {
    return res.status(400).send({
      success: false,
      msg: 'Not verify for change password',
    });
  }
  const newUser = await User.findById(user[0]._id);
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  newUser.password = hash;
  newUser.otp = null;
  newUser.otpTimeOut = null;
  newUser.isOtpVerify = false;

  const saavNew = await newUser.save();

  res.status(200).json({
    success: true,
    data: saavNew,
    message: 'Password change successfully',
  });
};
