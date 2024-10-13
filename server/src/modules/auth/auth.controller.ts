import { Context, Hono } from "hono";
import { UsersService } from "@/modules/users/users.service";
import { comparePassword, hashPassword } from "@/helpers/password";
import { AuthService } from "./auth.service";
import { Prisma } from "@prisma/client";
import { zValidator } from "@hono/zod-validator";
import {
  signInDto,
  signUpDto,
  identifyAccountDto,
  newPasswordDto,
  resetPasswordDto,
} from "./dtos/auth.dto";
import { errorMessages, successMessages } from "@/lib/messages";
import { verifyToken } from "@/middlewares/auth";
import jwt from "jsonwebtoken";
import { getCookie, setCookie } from "hono/cookie";
import { REFRESH_TOKEN_EXPIRE_IN } from "@/lib/constants";
export const router = new Hono();

router
  .post("/login", zValidator("json", signInDto), async (c: Context) => {
    const { email, password } = await c.req.json();
    const user = await UsersService.getUserByEmail(email);
    if (!user) {
      return c.json(
        {
          message: errorMessages.userNotFound,
          status: 404,
        },
        404
      );
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return c.json(
        {
          message: errorMessages.invalidPassword,
          status: 401,
        },
        401
      );
    }

    const accessToken = AuthService.createAccessToken({ userId: user.id });
    const refreshToken = await AuthService.createRefreshToken({
      userId: user.id,
    });
    setCookie(c, "refreshToken", refreshToken, {
      maxAge: REFRESH_TOKEN_EXPIRE_IN * 12,
      sameSite: "None",
      httpOnly: true,
      secure: true,
      path: "api/refresh-token",
    });
    return c.json({ accessToken });
  })
  .post("/sign-up", zValidator("json", signUpDto), async (c) => {
    const { email, password, firstName, lastName } = await c.req.json();
    try {
      const hashedPassword = await hashPassword(password);
      await UsersService.createUser({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });
      return c.json({ message: successMessages.userCreate, status: 201 });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return c.json(
          {
            message: errorMessages.existingEmail,
            status: 400,
          },
          400
        );
      }
    }
    return c.json(
      {
        message: "An error occurred",
        status: 500,
      },
      500
    );
  })
  .post(
    "/login/identify",
    zValidator("json", identifyAccountDto),
    async (c) => {
      const { email } = await c.req.json();
      const user = await UsersService.getUserByEmail(email);
      if (!user) {
        return c.json(
          {
            message: errorMessages.userNotFound,
            status: 404,
          },
          404
        );
      }
      return c.json({
        fullName: user.firstName + " " + user.lastName,
        email: user.email,
      });
    }
  )
  .post(
    "/login/reset-password",
    zValidator("json", resetPasswordDto),
    async (c) => {
      const { email } = await c.req.json();
      const user = await UsersService.getUserByEmail(email);
      if (!user) {
        return c.json(
          {
            message: errorMessages.userNotFound,
            status: 404,
          },
          404
        );
      }
      await AuthService.forgotPassword(user);
      return c.json({ message: successMessages.forgotPassword });
    }
  )
  .post(
    "/login/new-password",
    zValidator("json", newPasswordDto),
    async (c) => {
      const { newPassword, accessToken } = await c.req.json();
      const user = await verifyToken(accessToken);
      const hashedPassword = await hashPassword(newPassword);
      await UsersService.updateUser(user.id, { password: hashedPassword });
      return c.json({ message: "Update password successfully" });
    }
  )
  .post("/refresh-token", async (c) => {
    const refreshToken = getCookie(c, "refreshToken");
    const authHeader = c.req.raw.headers.get("Authorization");
    const accessToken = authHeader?.split(" ")[1];
    const jwtObject = jwt.decode(accessToken) as { userId: string };
    const userId = jwtObject?.userId;
    if (!userId || !refreshToken) {
      return c.json(
        {
          message: "Invalid access token",
          status: 401,
        },
        401
      );
    }
    const { newAccessToken, newRefreshToken } = await AuthService.refreshToken(
      refreshToken,
      userId as string
    );
    setCookie(c, "refreshToken", newRefreshToken, {
      maxAge: REFRESH_TOKEN_EXPIRE_IN * 12,
      sameSite: "None",
      httpOnly: true,
      secure: true,
      path: "api/refresh-token",
    });
    return c.json({ newAccessToken });
  });
