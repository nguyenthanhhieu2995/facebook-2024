import { Hono } from "hono";
import { PostsService } from "./post.service";
import { auth } from "@/middlewares/auth";

export const router = new Hono();

router.get("/", auth, async (c) => {
    const page = Number(c.req.query("page"));
    const limit = Number(c.req.query("limit"));
    const items = await PostsService.getPosts();

    return c.json({ items, total:10, page, limit },200);
})