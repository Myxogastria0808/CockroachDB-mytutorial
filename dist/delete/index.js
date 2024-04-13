"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleSample = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteSingleSample = async (id) => {
    const result = await prisma.sample.findMany({
        where: {
            id,
        },
    });
    if (result.length === 1) {
        await prisma.sample.delete({
            where: {
                cockroachdbId: result[0].cockroachdbId,
            },
        });
        console.log(result);
    }
    else if (result.length > 1) {
        throw `id: (${id}) exists in multiple.`;
    }
    else {
        throw `id: (${id}) is not exits.`;
    }
};
exports.deleteSingleSample = deleteSingleSample;
