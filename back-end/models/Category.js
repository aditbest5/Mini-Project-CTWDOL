module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING,
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
