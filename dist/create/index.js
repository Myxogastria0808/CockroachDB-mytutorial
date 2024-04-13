"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManySample = exports.createSingleSample = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//tag: LATESTを探す関数
const findLatestRecord = async () => {
    const result = await prisma.sampleRecordId.findMany({
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
    }
    else {
        throw '`tag: LATEST` have to exits only one.';
    }
};
const createSingleSample = async (data) => {
    const prevNumber = await findLatestRecord();
    const resultSampleRecordId = await prisma.sampleRecordId.create({
        data: {
            id: prevNumber + 1,
            tag: 'LATEST',
        },
    });
    const resultSample = await prisma.sample.create({
        data: {
            title: data.title,
            content: data.content,
            id: resultSampleRecordId.id,
        },
    });
    console.log(resultSample);
};
exports.createSingleSample = createSingleSample;
const createManySample = async (dataArray) => {
    const prevNumber = await findLatestRecord();
    const sampleRecordIdData = [];
    const sampleData = [];
    let index = 0;
    const maximumValue = dataArray.length + prevNumber;
    for (let id = prevNumber + 1; id <= maximumValue; id++) {
        if (id < maximumValue) {
            const eachSampleRecordId = await prisma.sampleRecordId.create({
                data: {
                    id,
                    tag: 'OLD',
                },
            });
            const eachSample = await prisma.sample.create({
                data: {
                    title: dataArray[index].title,
                    content: dataArray[index].content,
                    id,
                },
            });
            sampleRecordIdData.push(eachSampleRecordId);
            sampleData.push(eachSample);
        }
        else if (id === maximumValue) {
            const eachSampleRecordId = await prisma.sampleRecordId.create({
                data: {
                    id,
                    tag: 'LATEST',
                },
            });
            const eachSample = await prisma.sample.create({
                data: {
                    title: dataArray[index].title,
                    content: dataArray[index].content,
                    id,
                },
            });
            sampleRecordIdData.push(eachSampleRecordId);
            sampleData.push(eachSample);
        }
        else {
            throw 'Index out of range.';
        }
        index += 1;
    }
    console.log('SampleRecordId');
    console.log(sampleRecordIdData);
    console.log('Sample');
    console.log(sampleData);
};
exports.createManySample = createManySample;
