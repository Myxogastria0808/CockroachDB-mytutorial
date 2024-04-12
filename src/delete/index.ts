import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteSample = async (id: number) => {
    const result = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    console.log(result);
};

export { deleteSample };
