module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      qty: {
        type: DataTypes.INTEGER,
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

  // Cart.associate = (models) => {
  //   Cart.belongsTo(models.User, { foreignKey: "userId" });
  //   Cart.belongsToMany(models.Product, {
  //     through: models.Cart_Product,
  //     foreignKey: "cartId",
  //   });
  // Cart.hasMany(models.User, { foreignKey: "cartId" });
  // hasMany tidak perlu, karena sudah menggunakan many to many / belongsToMany
  // };
  return Cart;
};
