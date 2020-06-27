const router = require("express").Router();
const videoRoutes = require("./video");
const googleRoutes = require("./google");
const userRoutes = require("./user")

// Book routes
router.use("/video", videoRoutes);
router.use("/google", googleRoutes);
router.use("/user", userRoutes);

module.exports = router;
