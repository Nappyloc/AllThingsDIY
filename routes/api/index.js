const router = require("express").Router();
const videoRoutes = require("./video");
const googleRoutes = require("./google");

// Book routes
router.use("/video", videoRoutes);
router.use("/google", googleRoutes)

module.exports = router;
