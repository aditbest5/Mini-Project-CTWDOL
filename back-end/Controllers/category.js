const db = require("../models");

const Category = db.Category;
const { createToken } = require("../lib/createToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CategoryController = {
  getData: async (req, res) => {
    try {
      const categories = await Category.findAll({ raw: true });
      return res.status(200).json({
        result: categories,
      });
    } catch {
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  },
  editData: async (req, res) => {
    try {
      let { id } = req.params;
      let { category_name } = req.body;
      await Category.update({ category_name }, { where: { id } });
      return res.status(200).json({ message: "Update Success", success: true });
    } catch (err) {
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  },
  addData: async (req, res) => {
    try {
      const { category_name } = req.body;
      //check category name
      const isCategoryExist = await Category.findOne({
        where: { category_name },
      });
      if (isCategoryExist) {
        return res.status(409).json({
          message: "Category already exist!",
        });
      } else {
        await Category.create({ category_name });
        res.status(200).json({ message: "Add New Data Success" });
      }
    } catch (err) {
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  },
};
module.exports = CategoryController;
