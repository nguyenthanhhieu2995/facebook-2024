import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRE_IN,
  JWT_SECRET,
  REFRESH_TOKEN_EXPIRE_IN,
  WEB_URL,
} from "@/lib/constants";
import { render } from "@react-email/components";
import { ForgotPassword } from "@/emails/forgot-password";
import { mailService } from "@/helpers/email";
import { User } from "@prisma/client";
import { redisService } from "@/helpers/redis";
import { generateOpaqueToken } from "@/helpers/token";
import { UnauthorizedException } from "@/lib/exceptions";


export class AuthService {
  static createAccessToken({ userId }: { userId: string }) {
    return jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async createRefreshToken({ userId }: { userId: string }) {
    const refreshToken = generateOpaqueToken();
    await redisService.set(
      `refresh-token:${userId}`,
      refreshToken,
      "EX",
      REFRESH_TOKEN_EXPIRE_IN
    );
    return refreshToken;
  }

  static async refreshToken(refreshToken: string, userId: string) {
    const redisRefreshToken = await redisService.get(`refresh-token:${userId}`);
    if (redisRefreshToken !== refreshToken) {
      throw new UnauthorizedException("Invalid refresh token");
    }
    const newAccessToken = AuthService.createAccessToken({
      userId: userId.toString(),
    });
    const newRefreshToken = await AuthService.createRefreshToken({
      userId: userId.toString(),
    });
    return {
      newAccessToken,
      newRefreshToken
    };
  }

  static async forgotPassword(user: User) {
    const accessToken = AuthService.createAccessToken({ userId: user.id });
    const emailHtml = await render(
      ForgotPassword({
        url: `${WEB_URL}/login/new-password?resetPassword-token=${accessToken}`,
        fullName: user.firstName + " " + user.lastName,
      })
    );
    return await mailService.sendMail({
      to: user.email,
      subject: "Forgot password",
      html: emailHtml,
    });
  }
}
