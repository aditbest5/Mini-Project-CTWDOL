module.exports = (sequelize, DataTypes) => {
  const Transaction_Item = sequelize.define(
    "Transaction_Item",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      price: {
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
  // contoh menggunakan one to many
  //   Product_Category.associate = (models) => {
  //     Product_Category.belongsTo(models.Product, {
  //       foreignKey: "productId",
  //     });
  //     Product_Category.belongsTo(models.Category, {
  //       foreignKey: "categoryId",
  //     });
  //   };

  return Transaction_Item;
};
