const db = require("./models");

const user = db.user;

user.sync({ alter: false });

// const createUser = async () => {
//   const result = await user.create({});
// };
// createUser();
