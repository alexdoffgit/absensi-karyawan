import type { NextApiRequest, NextApiResponse } from 'next'
import { AbsenMasukReq } from '../../../dto/absen'
import { server } from '../../../lib/env'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const payload = req.body as AbsenMasukReq
    const resp = await fetch(server("absen/masuk"), {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const t = await resp.text()

    res.status(resp.status)
    res.send(t)
}