import { PrismaClient } from '@prisma/client';
import { CockroachDBSampleRecordIdType, CockroachDBSampleType, RecordType } from '../types/index';

const prisma = new PrismaClient();

//tag: LATESTを探す関数
const findLatestRecord = async (): Promise<number> => {
    const result: CockroachDBSampleRecordIdType[] = await prisma.sampleRecordId.findMany({
        where: {
            tag: 'LATEST',
        },
    });
    if (result.length === 1) {
        await prisma.sampleRecordId.update({
            where: {
                cockroachdbId: result[0].cockroachdbId,
            },
            data: {
                tag: 'OLD',
            },
        });
        return Number(result[0].id);
    } else {
        throw '`tag: LATEST` have to exits only one.';
    }
};

const createSingleSample = async (data: RecordType) => {
    const prevNumber: number = await findLatestRecord();
    const resultSampleRecordId: CockroachDBSampleRecordIdType = await prisma.sampleRecordId.create({
        data: {
            id: prevNumber + 1,
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

const createManySample = async (dataArray: RecordType[]) => {
    const prevNumber: number = await findLatestRecord();
    const sampleRecordIdData = [];
    const sampleData = [];
    let index: number = 0;
    const maximumValue = dataArray.length + prevNumber;
    for (let id: number = prevNumber + 1; id <= maximumValue; id++) {
        if (id < maximumValue) {
            const eachSampleRecordId: CockroachDBSampleRecordIdType = await prisma.sampleRecordId.create({
                data: {
                    id,
                    tag: 'OLD',
                },
            });
            const eachSample: CockroachDBSampleType = await prisma.sample.create({
                data: {
                    title: dataArray[index].title,
                    content: dataArray[index].content,
                    id,
                },
            });
            sampleRecordIdData.push(eachSampleRecordId);
            sampleData.push(eachSample);
        } else if (id === maximumValue) {
            const eachSampleRecordId: CockroachDBSampleRecordIdType = await prisma.sampleRecordId.create({
                data: {
                    id,
                    tag: 'LATEST',
                },
            });
            const eachSample: CockroachDBSampleType = await prisma.sample.create({
                data: {
                    title: dataArray[index].title,
                    content: dataArray[index].content,
                    id,
                },
            });
            sampleRecordIdData.push(eachSampleRecordId);
            sampleData.push(eachSample);
        } else {
            throw 'Index out of range.';
        }
        index += 1;
    }
    console.log('SampleRecordId');
    console.log(sampleRecordIdData);
    console.log('Sample');
    console.log(sampleData);
};

export { createSingleSample, createManySample };
