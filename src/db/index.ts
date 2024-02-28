import type { IUser } from "../types";
import bcrypt from "bcrypt";

export const UserRepo: IUser[] = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("admin", 10),
  },
];
