import express from "express";
import auth from "./auth.route";
import zendeskAuth from "./zendesk-auth.route";
import secret from "./secret.route";
import kiana from "./kiana.route";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.use("/auth", auth);
router.use("/zendeskAuth", zendeskAuth);
router.use("/secret", secret);
router.use("/kiana", kiana);

export default router;
