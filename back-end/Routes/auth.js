const { authControllers } = require("../Controllers");
const { verifyToken, checkRole } = require("../middleware/auth");

const router = require("express").Router();

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.get("/users", verifyToken, checkRole, authControllers.findAllUser);

module.exports = router;
