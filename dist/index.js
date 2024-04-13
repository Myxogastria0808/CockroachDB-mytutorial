"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const index_1 = require("./read/index");
const index_2 = require("./delete/index");
const prisma = new client_1.PrismaClient();
const findAllSampleRecordId = async () => {
    const result = await prisma.sampleRecordId.findMany();
    console.log(result);
};
const main = async () => {
    //*create
    // await createSingleSample({ title: '16th Title', content: 'Hello, Earth!' })
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
    ////////////////////////////////
    // await createManySample([
    //     { title: 'Second Title', content: 'nyaki!' },
    //     { title: 'Third Title', content: 'nyaki!' },
    //     { title: '4th Title', content: 'nyaki!' },
    //     { title: '5th Title', content: 'nynki!' },
    //     { title: '6th Title', content: 'nynnnki!' },
    //     { title: '7th Title', content: 'nymmki!' },
    //     { title: '8th Title', content: 'nymmki!' },
    //     { title: '9th Title', content: 'nyiki!' },
    //     { title: '10th Title', content: 'nycki!' },
    //     { title: '11th Title', content: 'nyaski!' },
    //     { title: '12th Title', content: 'nyski!' },
    //     { title: '13th Title', content: 'nyqqki!' },
    // ])
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
    // await createManySample([
    //     { title: '14th Title', content: 'nysi!' },
    //     { title: '15th Title', content: 'nyki!' },
    // ])
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
    //*update
    ////////////////////////////////
    // await updateSingleSample(1, { title: 'a', content: 'a' })
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
    ////////////////////////////////
    //*delete
    ////////////////////////////////
    await (0, index_2.deleteSingleSample)(15)
        .catch((e) => {
        throw e;
    })
        .finally(() => {
        prisma.$disconnect();
    });
    ////////////////////////////////
    //*find
    ////////////////////////////////
    // await findUniqueSample(1)
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
    ////////////////////////////////
    await (0, index_1.findAllSample)()
        .catch((e) => {
        throw e;
    })
        .finally(() => {
        prisma.$disconnect();
    });
    ////////////////////////////////
    //TODO
    /////////////////////////////
    findAllSampleRecordId()
        .catch((e) => {
        throw e;
    })
        .finally(() => {
        prisma.$disconnect();
    });
};
main();
