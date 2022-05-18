export function server(path: string): string {
    if(process.env.NEXT_PUBLIC_SERVER_URL) {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
        
        if(baseUrl.endsWith("/")) { 

            if(path.startsWith("/")) {
                const trimmedPath = path.slice(1, path.length)

                return baseUrl + trimmedPath
            }

            return baseUrl + path
        }

        const urlWithSlash = baseUrl + "/"

        if(path.startsWith("/")) {
            const trimmedPath = path.slice(1, path.length)

            return urlWithSlash + trimmedPath
        }

        return urlWithSlash + path
    }

    return ""
}