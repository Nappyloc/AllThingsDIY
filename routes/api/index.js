const router = require("express").Router();
const videoRoutes = require("./video");

// Book routes
router.use("/video", videoRoutes);

module.exports = router;
