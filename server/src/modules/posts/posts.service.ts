import { prisma } from "@/prisma/db";
import { Prisma } from "@prisma/client";
export class PostsService {
  static async getPosts(page: number, limit: number) {
    const items = await prisma.post.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const total = await prisma.post.count();
    return { items, total, page, limit };
  }

  static async createPost(data: Prisma.PostCreateInput) {
    return prisma.post.create({
      data,
    });
  }
}
