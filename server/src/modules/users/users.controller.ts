import { auth } from "@/middlewares/auth";
import { Hono } from "hono";
import { UsersService } from "./users.service";

export const router = new Hono();

router.get("/me", auth, async (c) => {
  try {
    const user = c.get("user");
    return c.json({
      fullName: user.firstName + " " + user.lastName,
      avatar: "https://cdn.giaoducthoidai.vn/images/a66b69a1b81b0f72a4339ef11b1c2c63b28b21f0bb9c9ba3d3fd5070d192b6eea321c291e38e3673780954302b698701e5553695fcb543e806cb7c7c2536535f/son-tung-m-tp-1.jpg"
    });
  } catch (error) {
    return c.json(
      {
        message: "Unauthorized",
        status: 401,
      },
      401
    );
  }
});
