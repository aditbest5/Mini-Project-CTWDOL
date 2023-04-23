module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
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
  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
      through: models.Product_Category,
      foreignKey: "ProductId",
    });
  };

  return Product;
};
