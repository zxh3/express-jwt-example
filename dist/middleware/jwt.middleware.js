"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
class JwtMiddleware {
    constructor() { }
    verify(req, res, next) {
        const bearer = req.header("Authorization") || "";
        const token = bearer.split(" ")[1];
        const payload = jwt_service_1.default.verify(token);
        return payload ? next() : res.status(401).send({ error: "Unauthorized" });
    }
}
exports.default = new JwtMiddleware();
