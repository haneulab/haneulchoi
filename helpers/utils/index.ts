import { ErrorStatusCode } from 'haneulchoistudio'
import { __utils__classnames } from './classnames'
import { __utils__getErrors } from './errors'

type UtilityConstructor = {
    classnames: (...strings: string[]) => string
    getErrors: (statusCode: ErrorStatusCode) => string
}

class Utility implements UtilityConstructor {
    public classnames: (...strings: string[]) => string
    public getErrors: (statusCode: ErrorStatusCode) => string

    constructor() {
        return
    }
}

const utility = new Utility()

utility.classnames = __utils__classnames
utility.getErrors = __utils__getErrors

export { utility }
