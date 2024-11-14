import { prisma } from "@/prisma/db";
import { Prisma } from "@prisma/client";
export class PostsService {
  static async getPosts(page: number, limit: number) {
    const items = await prisma.post.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        owner: true,
        likes: {
          include: {
            user: true,
          },
        },
      },
    });
    
    const total = prisma.post.count();
    return { items, total, page, limit};
  }

  static async likePost(postId: string, userId: string) {
    const isLiked = await prisma.post.findFirst({
      where: {
        id: postId,
      },
      select: {
        likes: {
          where: {
            userId,
          },
        },
      },
    });
    if (isLiked.likes.length > 0) {
      const likeId = isLiked.likes[0].id;
      const result = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          likes: {
            delete: {
              id: likeId,
            },
          },
        },
      });
      return result;
    }
    const result = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          create: {
            userId,
          },
        },
      },
    });
    return result;
  }

  static async createPost(data: Prisma.PostCreateInput) {
    return prisma.post.create({
      data,
    });
  }

  static getPostById(id: string) {
    return prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  static deletePost(id: string) {
    return prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
