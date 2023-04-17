module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define(
    "product_category",
    {
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    },
    {}
  );
  // contoh menggunakan one to many
  //   Product_Category.associate = (models) => {
  //     Product_Category.belongsTo(models.Product, {
  //       foreignKey: "productId",
  //     });
  //     Product_Category.belongsTo(models.Category, {
  //       foreignKey: "categoryId",
  //     });
  //   };

  return Product_Category;
};
