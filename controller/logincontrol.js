const User = require('../schemas/UserModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
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
      from: `Home Service Provider ${process.env.GMAIL}`,
      to: req.body.email,
      subject: 'Successfully Registered on HomeServices Provider',
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="padding: 20px;">
        <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
        <svg
        className='logo-svg'
        width='177'
        height='100'
        viewBox='0 0 177 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M98.9315 39.4284C96.1883 36.6852 92.9316 34.5091 89.3475 33.0245C85.7633 31.5399 81.9219 30.7758 78.0424 30.7758C74.1629 30.7758 70.3215 31.5399 66.7373 33.0245C63.1532 34.5091 59.8965 36.6852 57.1533 39.4284L78.0424 60.3174L98.9315 39.4284Z'
          fill='#FFD200'
        />
        <path
          d='M78.0686 60.3475C80.8118 63.0907 84.0684 65.2667 87.6526 66.7513C91.2367 68.2359 95.0782 69 98.9577 69C102.837 69 106.679 68.2359 110.263 66.7513C113.847 65.2667 117.104 63.0907 119.847 60.3475L98.9577 39.4584L78.0686 60.3475Z'
          fill='#06E07F'
        />
        <path
          d='M78.017 60.3429C75.2738 63.0861 72.0171 65.2621 68.433 66.7467C64.8488 68.2313 61.0074 68.9954 57.1279 68.9954C53.2484 68.9954 49.407 68.2313 45.8228 66.7467C42.2387 65.2621 38.982 63.0861 36.2388 60.3429L57.1279 39.4538L78.017 60.3429Z'
          fill='#E3073C'
        />
        <path
          d='M98.9831 39.433C101.726 36.6898 104.983 34.5138 108.567 33.0292C112.151 31.5446 115.993 30.7805 119.872 30.7805C123.752 30.7805 127.593 31.5446 131.177 33.0292C134.761 34.5138 138.018 36.6898 140.761 39.433L119.872 60.3221L98.9831 39.433Z'
          fill='#1F84EF'
        />
      </svg>
      </div>
          <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">Hello ${req.body.name},</h2>
          <p style="font-size: 16px; color: #666; margin-bottom: 20px;">Congratulations for choosing Home Service Provider! We're thrilled to have you on board.</p>
          <p style="font-size: 16px; color: #666; margin-bottom: 20px;">Thank you for joining us!</p>
        </div>
      </div>
    </div>
      `,
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
    from: `Home Service Provider ${process.env.GMAIL}`,
    to: userEmail[0].email,
    subject: 'OTP verification for reset/forgot password',
    html: ` 
    
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <div style="padding: 20px;">
    <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
    <svg
    className='logo-svg'
    width='177'
    height='100'
    viewBox='0 0 177 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M98.9315 39.4284C96.1883 36.6852 92.9316 34.5091 89.3475 33.0245C85.7633 31.5399 81.9219 30.7758 78.0424 30.7758C74.1629 30.7758 70.3215 31.5399 66.7373 33.0245C63.1532 34.5091 59.8965 36.6852 57.1533 39.4284L78.0424 60.3174L98.9315 39.4284Z'
      fill='#FFD200'
    />
    <path
      d='M78.0686 60.3475C80.8118 63.0907 84.0684 65.2667 87.6526 66.7513C91.2367 68.2359 95.0782 69 98.9577 69C102.837 69 106.679 68.2359 110.263 66.7513C113.847 65.2667 117.104 63.0907 119.847 60.3475L98.9577 39.4584L78.0686 60.3475Z'
      fill='#06E07F'
    />
    <path
      d='M78.017 60.3429C75.2738 63.0861 72.0171 65.2621 68.433 66.7467C64.8488 68.2313 61.0074 68.9954 57.1279 68.9954C53.2484 68.9954 49.407 68.2313 45.8228 66.7467C42.2387 65.2621 38.982 63.0861 36.2388 60.3429L57.1279 39.4538L78.017 60.3429Z'
      fill='#E3073C'
    />
    <path
      d='M98.9831 39.433C101.726 36.6898 104.983 34.5138 108.567 33.0292C112.151 31.5446 115.993 30.7805 119.872 30.7805C123.752 30.7805 127.593 31.5446 131.177 33.0292C134.761 34.5138 138.018 36.6898 140.761 39.433L119.872 60.3221L98.9831 39.433Z'
      fill='#1F84EF'
    />
  </svg>
  </div>
      <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">Hello ${userEmail[0].name}</h2>

      <p style="font-size: 16px; color: #666; margin-bottom: 20px;">Otp for reset password</p>
      <h3 style="font-size: 18px; color: #333; margin-bottom: 20px;">${otp}</h3>

     
      <p style="font-size: 16px; color: #666; margin-bottom: 20px;">Thank you for joining us!</p>
    </div>
  </div>
</div>
    `,
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
