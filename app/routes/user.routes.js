const router = require("express").Router();
const controllers = require("../controllers/user.controller.js");

// Create a new Tutorial
router.get("", controllers.findAll);
router.post("", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.delete);

//  user.address
router.get("/:id/address", controllers.findAddress);
router.post("/address", controllers.createUserAddress);
module.exports = router;
