import { PrismaClient } from '@prisma/client';
import { SampleType } from 'types';

const prisma = new PrismaClient();

const updateSample = async (id: number, sample: SampleType) => {
    const result: {
        id: bigint;
        title: string;
        content: string;
    } = await prisma.sample.update({
        where: {
            id,
        },
        data: sample,
    });
    console.log(result);
};

export { updateSample };
