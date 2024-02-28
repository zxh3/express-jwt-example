import express from "express";
import JwtMiddleware from "../middleware/jwt.middleware";

const router = express.Router();

router.post("/", JwtMiddleware.verify, (req, res) => {
  return res.status(200).json({
    message: "You are authorized to see this secret message.",
  });
});

export default router;
