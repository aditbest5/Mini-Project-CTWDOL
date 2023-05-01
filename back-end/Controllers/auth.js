const db = require("../models");
const User = db.User;
const transporter = require("../lib/emailer");
const { createToken } = require("../lib/createToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthController = {
  register: async (req, res) => {
    try {
      const { email, username, password, name } = req.body;

      //check email
      const isEmailExist = await User.findOne({
        where: { email },
      });
      if (isEmailExist) {
        return res.status(409).json({
          message: "Email already exist!",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      await User.create({
        username,
        email,
        password: hashPassword,
        name,
        isAdmin: false,
        status: "unverified",
      });
      let token = createToken({
        username,
        email,
        isAdmin: false,
        status: "unverified",
      }); // memasukan bahan data ke createToken untuk menjadi payloadnya

      await transporter.sendMail(
        {
          from: `Admin <aditbest5@gmail.com>`,
          to: `${email}`,
          subject: "Activate account",
          html: `<h1>Welcome to Purwadhik. Hello ${email}, please confirm your account <a href='http://localhost:3000/authentication/${token}'>here</a></h1>`,
        },
        (errMail, resMail) => {
          if (errMail) {
            console.log(errMail);
            res.status(500).send({
              message: "Verification Failed!",
              success: false,
              err: errMail,
            });
          }
          res.status(200).send({
            message: "Verification Success, Check Your Email",
            success: true,
          });
        }
      );
      return res.status(200).json({
        token,
        message: "Register Success!",
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },
  verification: async (req, res) => {
    try {
      await User.update(
        { status: "verified" },
        { where: { email: req.user.email } }
      );
      res.status(200).send({ message: "Verified Account", success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const checkEmail = await User.findOne({ where: { email } });
      if (!checkEmail) {
        return res.status(409).json({
          message: "no email found!",
        });
      }
      const checkPassword = await bcrypt.compare(password, checkEmail.password);
      if (!checkPassword) {
        return res.status(409).json({
          message: "Password is incorrect!",
        });
      }
      // Make JWT
      let payload = {
        id: checkEmail.id,
        email: checkEmail.email,
        username: checkEmail.username,
      };
      const token = createToken(payload);
      return res.status(200).json({
        token,
        message: "login success",
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },
  // find all users
  findAllUser: async (req, res) => {
    try {
      const users = await User.findAll({ raw: true });
      return res.status(200).json({
        result: users,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },
};

module.exports = AuthController;
