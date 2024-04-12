import { Prisma, PrismaClient } from '@prisma/client';
import { SampleType } from 'types';

const prisma = new PrismaClient();

const singleCreateSample = async (sample: SampleType) => {
    const result: {
        id: bigint;
        title: string;
        content: string;
    } = await prisma.sample.create({
        data: {
            title: sample.title,
            content: sample.content,
        },
    });
    console.log(result);
};

const multiCreateSample = async (samples: SampleType[]) => {
    const result: Prisma.BatchPayload = await prisma.sample.createMany({
        data: samples,
    });
    console.log(result);
};

export { singleCreateSample, multiCreateSample };
