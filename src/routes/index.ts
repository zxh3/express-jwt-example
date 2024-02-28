import express from "express";
import auth from "./auth.route";
import secret from "./secret.route";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.use("/auth", auth);
router.use("/secret", secret);

export default router;
