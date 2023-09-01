const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

router.post("/signup", userController.register);
router.post("/login", userController.login);
router.get("/home",auth, userController.home);
// router.get("/home", userController.home);

module.exports = router;
