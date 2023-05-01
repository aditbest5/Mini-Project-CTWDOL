module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
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
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "unverified",
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {}
  );

  // User.associate = (models) => {
  //   User.hasOne(models.Cart, { foreignKey: "userId" });
  // };
  User.associate = (models) => {
    User.belongsToMany(models.Product, {
      through: models.Store,
      foreignKey: "userId",
    });
    User.belongsToMany(models.Product, {
      through: models.Cart,
      foreignKey: "userId",
    });
    User.belongsToMany(models.Cart, {
      through: models.Transaction,
      foreignKey: "userId",
    });
  };

  return User;
};
