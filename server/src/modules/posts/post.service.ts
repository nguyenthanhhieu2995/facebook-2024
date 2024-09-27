import { prisma } from "@/prisma/db";

export class PostsService {
  static async getPosts() {
    return prisma.post.findMany({});
  }
}
