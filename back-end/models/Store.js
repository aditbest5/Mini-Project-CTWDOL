module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Store",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      store_name: {
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
  Store.associate = (models) => {
    Store.hasMany(models.Transaction, { foreignKey: "StoreId" });
  };

  return Store;
};
