"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const { username, password } = req.body;
    const user = db_1.UserRepo.find((user) => user.username === username);
    const isValid = user ? bcrypt_1.default.compareSync(password, user.password) : false;
    if (isValid) {
        const payload = { id: user.id, username };
        return res.json({
            token: jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h",
            }),
        });
    }
    else {
        return res.status(401).send("Invalid username or password.");
    }
});
exports.default = router;
