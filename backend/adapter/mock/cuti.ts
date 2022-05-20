import { createReadStream, ReadStream } from "fs";
import { Cuti, ICuti } from "../../domain/model/cuti";
import { FileGetter, FileStore } from "../../domain/shared/file";

export class CutiMock implements ICuti, FileGetter, FileStore {
    async ajukan(cuti: Cuti) {
        return null
    }

    async getFile(path: string) {
        const streamSource = Buffer.from("ajaja")
        const stream = createReadStream(streamSource)

        return stream
    }

    async storeFile(path: string, 
        file: string | Blob | File | Buffer | ReadStream, 
        filename?: string) {
        return null
    }
}