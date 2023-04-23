const db = require("./models");

db.sequelize.sync({ alter: false });

// const createUser = async () => {
//   const result = await user.create({});
// };
// createUser();
// const findUser = async () => {
//   const result = await user.findAll({
//     where: {
//       id: 1,
//     },
//   });
//   console.log(result[0].dataValues);
// };
// findUser();
