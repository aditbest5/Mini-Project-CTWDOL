const { categoryController } = require("../Controllers");
const { verifyToken, checkRole } = require("../middleware/auth");

const router = require("express").Router();
// const { auth } = require("../lib/authToken");
router.get("/get-category", categoryController.getData);
router.patch("/edit-category/:id", verifyToken, categoryController.editData);
router.post("/add-category", verifyToken,categoryController.addData )
module.exports = router;
