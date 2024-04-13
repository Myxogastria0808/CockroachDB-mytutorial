import { PrismaClient } from '@prisma/client';
import { CockroachDBSampleType, RecordType } from '../types/index';

const prisma = new PrismaClient();

const updateSingleSample = async (id: number, data: RecordType) => {
    const result: CockroachDBSampleType[] = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        const updatedResult: CockroachDBSampleType = await prisma.sample.update({
            where: {
                id: result[0].id,
            },
            data: {
                title: data.title,
                content: data.content,
            },
        });
        console.log(updatedResult);
    } else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    } else {
        throw `id: (${id}) is not exits.`;
    }
};

export { updateSingleSample };
