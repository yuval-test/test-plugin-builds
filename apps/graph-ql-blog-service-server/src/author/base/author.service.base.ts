/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Author as PrismaAuthor,
  Comment as PrismaComment,
  Post as PrismaPost,
} from "@prisma/client";

export class AuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AuthorCountArgs, "select">): Promise<number> {
    return this.prisma.author.count(args);
  }

  async authors(args: Prisma.AuthorFindManyArgs): Promise<PrismaAuthor[]> {
    return this.prisma.author.findMany(args);
  }
  async author(
    args: Prisma.AuthorFindUniqueArgs
  ): Promise<PrismaAuthor | null> {
    return this.prisma.author.findUnique(args);
  }
  async createAuthor(args: Prisma.AuthorCreateArgs): Promise<PrismaAuthor> {
    return this.prisma.author.create(args);
  }
  async updateAuthor(args: Prisma.AuthorUpdateArgs): Promise<PrismaAuthor> {
    return this.prisma.author.update(args);
  }
  async deleteAuthor(args: Prisma.AuthorDeleteArgs): Promise<PrismaAuthor> {
    return this.prisma.author.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.author
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findPosts(
    parentId: string,
    args: Prisma.PostFindManyArgs
  ): Promise<PrismaPost[]> {
    return this.prisma.author
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .posts(args);
  }
}
