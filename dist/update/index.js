"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleSample = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateSingleSample = async (id, data) => {
    const result = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        const updatedResult = await prisma.sample.update({
            where: {
                id: result[0].id,
            },
            data: {
                title: data.title,
                content: data.content,
            },
        });
        console.log(updatedResult);
    }
    else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    }
    else {
        throw `id: (${id}) is not exits.`;
    }
};
exports.updateSingleSample = updateSingleSample;
