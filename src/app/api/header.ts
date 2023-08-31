import { environment } from "src/environments/environment"

const apiKey = environment.apiKey

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}