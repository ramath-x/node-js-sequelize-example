const router = require("express").Router();

router.use("/api/tutorials", require("./turorial.routes"));

router.use("/api/users", require("./user.routes"));

module.exports = router;
