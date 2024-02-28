"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_middleware_1 = __importDefault(require("../middleware/jwt.middleware"));
const router = express_1.default.Router();
router.post("/", jwt_middleware_1.default.verify, (req, res) => {
    return res.status(200).json({
        message: "You are authorized to see this secret message.",
    });
});
exports.default = router;
