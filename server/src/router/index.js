const router = require("express").Router();
const authRouter = require("../modules/auth/auth.router")
const faqRouter = require("../modules/faq/faq.router")
const teamRouter = require("../modules/team/team.router")
const contactRouter = require("../modules/contact/contact.router");

router.use("/auth", authRouter);
router.use("/team", teamRouter);
router.use("/faq", faqRouter);
router.use("/contact", contactRouter);

module.exports = router