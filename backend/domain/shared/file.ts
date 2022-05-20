export interface FileGetter {
    getFile: (path: string) => Promise<ReadableStream>
}

export interface FileStore {
    storeFile: (path: string, 
        file: Blob|File|Buffer|string|ReadableStream, 
        filename?: string) => Promise<null>
}