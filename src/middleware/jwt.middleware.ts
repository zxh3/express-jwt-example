import JwtService from "../services/jwt.service";
import { Request, Response, NextFunction } from "express";

class JwtMiddleware {
  constructor() {}

  verify(req: Request, res: Response, next: NextFunction) {
    const bearer = req.header("Authorization") || "";
    const token = bearer.split(" ")[1];
    const payload = JwtService.verify(token);
    return payload ? next() : res.status(401).send({ error: "Unauthorized" });
  }
}

export default new JwtMiddleware();
