export function server(path: string): string {
    if(process.env.SERVER_URL) {
        const baseUrl = process.env.SERVER_URL
        
        if(baseUrl.endsWith("/")) { 

            if(path.startsWith("/")) {
                const trimmedPath = path.slice(1, path.length - 1)

                return baseUrl + trimmedPath
            }

            return baseUrl + path
        }

        const urlWithSlash = baseUrl + "/"

        if(path.startsWith("/")) {
            const trimmedPath = path.slice(1, path.length - 1)

            return urlWithSlash + trimmedPath
        }

        return urlWithSlash + path
    }

    return ""
}