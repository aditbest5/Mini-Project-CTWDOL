const db = require("../models");

const User = db.User;
const { createToken } = require("../lib/createToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserController = {
  getData: async (req, res) => {
    try {
      const User = await User.findOne({
        where: { email },
      });
    } catch {
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  },
};
