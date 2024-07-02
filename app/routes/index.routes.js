const router = require("express").Router();

router.use("/api/tutorials", require("./turorial.routes"));

module.exports = router;
