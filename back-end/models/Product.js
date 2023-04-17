module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      product_name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      stock: {
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
  // Product.associate = (models) => {
  //   Product.belongsToMany(models.Cart, {
  //     through: models.Cart_Product,
  //     foreignKey: "productId",
  //   });
  //   Product.belongsToMany(models.Category, {
  //     through: models.Product_Category,
  //     foreignKey: "productId",
  //   });
  //   //Jika menggunakan has many
  //   Product.hasMany(models.Cart_Product, {
  //     foreignKey: "productId",
  //   });
  //   Product.hasMany(models.Category, {
  //     foreignKey: "productId",
  //   });
  // };

  return Product;
};
