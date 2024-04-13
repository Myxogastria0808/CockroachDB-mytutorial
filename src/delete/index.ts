import { PrismaClient } from '@prisma/client';
import { CockroachDBSampleType } from '../types/index';

const prisma = new PrismaClient();

const deleteSingleSample = async (id: number) => {
    const result: CockroachDBSampleType[] = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        await prisma.sample.delete({
            where: {
                cockroachdbId: result[0].cockroachdbId,
            },
        });
        console.log(result);
    } else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    } else {
        throw `id: (${id}) is not exits.`;
    }
};

export { deleteSingleSample };
