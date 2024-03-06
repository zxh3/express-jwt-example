import express from "express";
import bcrypt from "bcrypt";
import { UserRepo } from "../db";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = UserRepo.find((user) => user.username === username);
  const isValid = user ? bcrypt.compareSync(password, user.password) : false;

  if (isValid) {
    const payload = { id: user!.id, username };
    return res.json({
      token: jwt.sign(payload, process.env.ZENDESK_JWT_SECRET!, {
        expiresIn: "1h",
      }),
    });
  } else {
    return res.status(401).send("Invalid username or password.");
  }
});

export default router;
