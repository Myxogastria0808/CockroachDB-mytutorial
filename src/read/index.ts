import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const findFirstSample = async (id?: number, title?: string) => {
    const result:
        | {
              id: bigint;
              title: string;
              content: string;
          }[]
        | null = await prisma.sample.findMany({
        where: {
            OR: [
                {
                    id,
                },
                {
                    title,
                },
            ],
        },
    });
    console.log(result);
};

const findAllSample = async () => {
    const result = await prisma.sample.findMany();
    console.log(result);
};

export { findFirstSample, findAllSample };
