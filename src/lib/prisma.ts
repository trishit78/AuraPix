import { PrismaClient } from "@/generated/prisma";

declare global {
    namespace globalThis {
        var prismadb: PrismaClient;
    }
}

const prisma = globalThis.prismadb || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismadb = prisma;

export default prisma;