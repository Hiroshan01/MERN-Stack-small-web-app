const express = require("express");
const router = express.Router();

// Import controller
const UserController = require("../Controllers/userControllers");

// Define routes
router.get("/", UserController.getAllUsers);

router.post("/", UserController.addUsers);

router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

// Export router
module.exports = router;
