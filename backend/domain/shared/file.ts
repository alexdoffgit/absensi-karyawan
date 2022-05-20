export interface FileGetter {
    getFile: (path: string) => Promise<Blob|File|Buffer|string>
}

export interface FileStore {
    storeFile: (path: string, file: Blob|File|Buffer|string, filename?: string) => Promise<null>
}