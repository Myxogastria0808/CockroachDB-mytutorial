"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const singleCreateSample = async (sample) => {
    const result = await prisma.sample.create({
        data: {
            title: sample.title,
            content: sample.content,
        },
    });
    console.log(result);
};
singleCreateSample({ title: 'Hello', content: 'Hello, World!' });
