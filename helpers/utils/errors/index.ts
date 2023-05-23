import { ErrorStatusCode } from 'haneulchoistudio'

export function __utils__getErrors(statusCode: ErrorStatusCode): string {
    const errors = {
        404: 'Page Not Found',
        500: 'Server Error',
    }

    return errors[statusCode]
}
