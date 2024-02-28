"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.UserRepo = [
    {
        id: 1,
        username: "admin",
        password: bcrypt_1.default.hashSync("admin", 10),
    },
];
