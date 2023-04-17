module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "store",
    {
      store_name: {
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
  return Store;
};
