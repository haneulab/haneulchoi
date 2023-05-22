import { utility } from './utils'
class Helper {
    public classnames: (..._strings: string[]) => string
    constructor() {
        return
    }
}
const helper = new Helper()

Helper.prototype.classnames = utility.classnames

export { helper }
