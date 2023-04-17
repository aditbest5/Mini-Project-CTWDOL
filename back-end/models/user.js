const { DataTypes, Models, Sequelize } = require("sequelize");

class user extends Model {}

module.exports = (sequelize, Sequelize) => {
  const User = user.init(
    {
      email: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    { sequelize, modelName: "user" }
  );
  return User;
};
