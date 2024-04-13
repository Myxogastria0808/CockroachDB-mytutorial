"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllSample = exports.findUniqueSample = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const findUniqueSample = async (id) => {
    const result = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        console.log(result);
    }
    else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    }
    else {
        throw `id: (${id}) is not exits.`;
    }
};
exports.findUniqueSample = findUniqueSample;
const findAllSample = async () => {
    const result = await prisma.sample.findMany();
    console.log(result);
};
exports.findAllSample = findAllSample;
