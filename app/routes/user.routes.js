const router = require("express").Router();
const controllers = require("../controllers/user.controller.js");

// Create a new Tutorial
router.get("", controllers.findAll);
router.post("", controllers.create);
router.put("/:id", controllers.update);
// router.delete("/:id", controllers.findAll);

module.exports = router;
