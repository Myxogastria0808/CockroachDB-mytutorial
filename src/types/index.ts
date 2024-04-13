import { $Enums } from '@prisma/client';

type CockroachDBSampleRecordIdType = {
    cockroachdbId: bigint;
    id: bigint;
    tag: $Enums.Tag;
};

type CockroachDBSampleType = {
    cockroachdbId: bigint;
    title: string;
    content: string;
    id: bigint;
};

type RecordType = {
    title: string;
    content: string;
};

export { CockroachDBSampleRecordIdType, CockroachDBSampleType, RecordType };
