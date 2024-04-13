import { PrismaClient } from '@prisma/client';
import { findAllSample, findUniqueSample } from './read/index';
import { createManySample, createSingleSample } from './create/index';
import { updateSingleSample } from './update/index';
import { deleteSingleSample } from './delete/index';

const prisma = new PrismaClient();

//test
// import { CockroachDBSampleRecordIdType } from 'types';

// const findAllSampleRecordId = async () => {
//     const result: CockroachDBSampleRecordIdType[] = await prisma.sampleRecordId.findMany();
//     console.log(result);
// };

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
    await deleteSingleSample(15)
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
    await findAllSample()
        .catch((e) => {
            throw e;
        })
        .finally(() => {
            prisma.$disconnect();
        });
    ////////////////////////////////

    //TODO
    /////////////////////////////
    // findAllSampleRecordId()
    //     .catch((e) => {
    //         throw e;
    //     })
    //     .finally(() => {
    //         prisma.$disconnect();
    //     });
};

main();
