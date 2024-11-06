import { auth } from "@/middlewares/auth";
import { Hono } from "hono";
import { UsersService } from "./users.service";
import { zValidator } from "@hono/zod-validator";
import { updateMeDto } from "./dtos/update-me.dto";

export const router = new Hono();

router
  .get("/me", auth, async (c) => {
    try {
      const user = c.get("user");
      return c.json(user);
    } catch (error) {
      return c.json(
        {
          message: "Unauthorized",
          status: 401,
        },
        401
      );
    }
  })
  .put("/me", auth, zValidator("json", updateMeDto), async (c) => {
    const user = c.get("user");
    const updateMeDto = await c.req.json();
    await UsersService.updateUser(user.id, updateMeDto);
    return c.json({ message: "Update user successfully" });
  });
