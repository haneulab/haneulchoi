class UIUtility {
    public static classnames(...strings: string[]): string {
        return strings.filter(Boolean).join(' ')
    }
}

export default UIUtility
