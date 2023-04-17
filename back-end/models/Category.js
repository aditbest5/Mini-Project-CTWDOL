module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      category_name: {
        type: Sequelize.STRING,
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
  // Category.associate = (models) => {
  //   Category.belongsToMany(models.Product, {
  //     through: models.Product_Category,
  //     foreignKey: "categoryId",
  //   });
  //   Category.hasMany(models.Product_Category, {
  //     foreignKey: "categoryId",
  //   });
  // };

  return Category;
};
