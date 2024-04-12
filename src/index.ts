import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type SampleType = {
    title: string;
    content: string;
};

const singleCreateSample = async (sample: SampleType) => {
    const result = await prisma.sample.create({
        data: {
            title: sample.title,
            content: sample.content,
        },
    });
    console.log(result);
};

singleCreateSample({ title: 'Hello', content: 'Hello, World!' });
