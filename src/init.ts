import { PrismaClient } from '@prisma/client';
import { CockroachDBSampleRecordIdType, CockroachDBSampleType, RecordType } from './types/index';

const prisma = new PrismaClient();

const initialCreate = async (data: RecordType) => {
    const resultSampleRecordId: CockroachDBSampleRecordIdType = await prisma.sampleRecordId.create({
        data: {
            id: 1,
            tag: 'LATEST',
        },
    });
    const resultSample: CockroachDBSampleType = await prisma.sample.create({
        data: {
            title: data.title,
            content: data.content,
            id: resultSampleRecordId.id,
        },
    });
    console.log(resultSample);
};

//実行
initialCreate({ title: 'Initial Title', content: 'This is the origin record.' })
    .catch((e) => {
        throw e;
    })
    .finally(() => {
        prisma.$disconnect();
    });
