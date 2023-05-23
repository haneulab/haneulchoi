import type { ErrorStatusCode } from 'haneulchoistudio'
import { utility } from './utils'
class Helper {
    public classnames: (..._strings: string[]) => string
    public getErrors: (statusCode: ErrorStatusCode) => string
    constructor() {
        return
    }
}
const helper = new Helper()

Helper.prototype.classnames = utility.classnames
Helper.prototype.getErrors = utility.getErrors

export { helper }
