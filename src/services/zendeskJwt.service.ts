import jwt from "jsonwebtoken";

class ZendeskJwtService {
  constructor() {}

  sign(payload: any) {
    return jwt.sign(payload, process.env.ZENDESK_JWT_SECRET!, {
      expiresIn: "1h",
    });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, process.env.ZENDESK_JWT_SECRET!);
    } catch (error) {
      return false;
    }
  }

  decode(token: string) {
    return jwt.decode(token);
  }
}

export default new ZendeskJwtService();
