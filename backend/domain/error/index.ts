class HttpError extends Error {
    private errcode: number

    constructor(code: number, message?: string) {
        super(message)
        this.errcode = code
    }

    public getHttpErrorCode(): number {
        return this.errcode
    }
}

export class InternalServerErr extends HttpError {
    constructor() {
        super(500, "internal server error")
        this.name = "InternalServerError"
    }
}

export class SudahAbsenMasukErr extends HttpError {
    constructor(message?: string) {
        super(400, message)
        this.name = "SudahAbsenMasuk"
    }
}

export class BelumAbsenErr extends HttpError {
    constructor(message?: string) {
        super(400, message)
        this.name = "BelumAbsen"
    }
}