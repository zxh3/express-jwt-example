"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    constructor() { }
    sign(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
    }
    verify(token) {
        try {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        }
        catch (error) {
            return false;
        }
    }
    decode(token) {
        return jsonwebtoken_1.default.decode(token);
    }
}
exports.default = new JwtService();
