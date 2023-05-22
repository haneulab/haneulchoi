import { __utils__classnames } from './classnames'

type UtilityConstructor = {
    classnames: (...strings: string[]) => string
}

class Utility implements UtilityConstructor {
    public classnames: (...strings: string[]) => string

    constructor() {
        return
    }
}

const utility = new Utility()

utility.classnames = __utils__classnames

export { utility }
