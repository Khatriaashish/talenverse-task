const router = require("express").Router();
const authRouter = require("../modules/auth/auth.router")
const faqRouter = require("../modules/faq/faq.router")

router.use("/auth", authRouter);
router.use("/faq", faqRouter);

module.exports = router