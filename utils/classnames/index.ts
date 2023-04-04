export function classnames(...classNames: Array<string>): string {
    return classNames.filter(Boolean).join(' ')
}
