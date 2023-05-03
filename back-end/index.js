const path = require("path");
dotenv = require("dotenv").config({ path: path.resolve("./.env") });
const db = require("./models");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.DEV_PORT;
app.use(express.json());
db.sequelize.sync({ alter: true });
const { authRoutes } = require("./Routes");
app.use(cors());

app.use("/auth", authRoutes);
app.listen(port, () => console.log(`Server is running at port ${port}`));
