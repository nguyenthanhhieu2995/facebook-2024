import { Hono } from "hono";
import { PostsService } from "./posts.service";
import { auth } from "@/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { createPostDto } from "./dtos/create-post.dto";

export const router = new Hono();

router
  .get("/", auth, async (c) => {
    const page = Number(c.req.query("page"));
    const limit = Number(c.req.query("limit"));
    const items = await PostsService.getPosts(page, limit);
    return c.json(items, 200);
  })
  .post("/", auth, zValidator("json", createPostDto), async (c) => {
    const user = c.get("user");
    const createPostDto = await c.req.json();
    const post = await PostsService.createPost({
      content: createPostDto.content,
      image: createPostDto.images[0],
      owner: {
        connect: {
          id: user.id,
        },
      },
    });
    return c.json(post, 201);
  })
  .put("/:id/like", auth, async (c) => {
    const id = c.req.param("id");
    const user = c.get("user");
    const post = await PostsService.getPostById(id);
    if (!post) {
      return c.json({ message: "Post not found" }, 404);
    }
    await PostsService.likePost(id, user.id);
    return c.json({ message: "Like post successfully" });
  })
  .delete("/:id", auth, async (c) => {
    const id = c.req.param("id");
    const user = c.get("user");
    const post = await PostsService.getPostById(id);
    if (!post) {
      return c.json({ message: "Post not found" }, 404);
    }
    if (post.ownerId !== user.id) {
      return c.json(
        { message: "You are not allowed to delete this post" },
        401
      );
    }
    await PostsService.deletePost(id);
    return c.json({ message: "Delete post successfully" });
  });
