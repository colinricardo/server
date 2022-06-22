import { PrismaClient } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {}
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}
