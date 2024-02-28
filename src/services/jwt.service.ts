import jwt from "jsonwebtoken";

class JwtService {
  constructor() {}

  sign(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      return false;
    }
  }

  decode(token: string) {
    return jwt.decode(token);
  }
}

export default new JwtService();
