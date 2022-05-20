import { ReadStream } from "fs"

export interface FileGetter {
    getFile: (path: string) => Promise<ReadStream>
}

export interface FileStore {
    storeFile: (path: string, 
        file: Blob|File|Buffer|string|ReadStream, 
        filename?: string) => Promise<null>
}