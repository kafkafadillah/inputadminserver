const express = require("express");
const UserController = require("../controller/userController.js");

const router = express.Router();

router.get("/", UserController.getUser);
router.post("/", UserController.createUser);

router.get("/:id", UserController.getUserById);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
