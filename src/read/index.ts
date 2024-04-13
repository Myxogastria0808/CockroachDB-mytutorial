import { PrismaClient } from '@prisma/client';
import { CockroachDBSampleType } from '../types/index';

const prisma = new PrismaClient();

const findUniqueSample = async (id: number) => {
    const result: CockroachDBSampleType[] = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        console.log(result);
    } else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    } else {
        throw `id: (${id}) is not exits.`;
    }
};

const findAllSample = async () => {
    const result: CockroachDBSampleType[] = await prisma.sample.findMany();
    console.log(result);
};

export { findUniqueSample, findAllSample };
