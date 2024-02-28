"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const secret_route_1 = __importDefault(require("./secret.route"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello World");
});
router.use("/auth", auth_route_1.default);
router.use("/secret", secret_route_1.default);
exports.default = router;
