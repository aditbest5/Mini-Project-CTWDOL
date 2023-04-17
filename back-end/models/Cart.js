module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "cart",
    {
      qty: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
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
  //   Cart.hasMany(models.Cart_Product, { foreignKey: "cartId" });
    // hasMany tidak perlu, karena sudah menggunakan many to many / belongsToMany
  // };
  return Cart;
};
