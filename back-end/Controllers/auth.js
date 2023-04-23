const db = require("../models");
const User = db.User;

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
      await User.create({ username, email, password: hashPassword, name });
      return res.status(200).json({
        message: "Register Success!",
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
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
      const token = jwt.sign(payload, "key123", { expiresIn: "2h" });
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
