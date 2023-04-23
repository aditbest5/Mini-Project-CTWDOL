module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define(
    "Product_Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
