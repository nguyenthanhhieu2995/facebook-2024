import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE_IN, JWT_SECRET } from "@/lib/constants";

export class AuthService {
    static createToken({ userId }: { userId: string }) {
        return jwt.sign({ userId }, JWT_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRE_IN,
        });
    }
}