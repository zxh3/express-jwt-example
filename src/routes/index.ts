import express from "express";
import auth from "./auth.route";
import secret from "./secret.route";

const router = express.Router();

router.use("/auth", auth);
router.use("/secret", secret);

export default router;
