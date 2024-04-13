"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const initialCreate = async (data) => {
    const resultSampleRecordId = await prisma.sampleRecordId.create({
        data: {
            id: 1,
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
//実行
initialCreate({ title: 'Initial Title', content: 'This is the origin record.' })
    .catch((e) => {
    throw e;
})
    .finally(() => {
    prisma.$disconnect();
});
