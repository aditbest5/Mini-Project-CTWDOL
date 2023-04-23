const db = require("./models");
const express = require("express");
const port = 2000;
const app = express();
app.use(express.json());
db.sequelize.sync({ alter: false });
const { authRoutes } = require("./Routes");

app.use("/auth", authRoutes);
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
app.listen(port, () => console.log(`Server is running at port ${port}`));
