export function sum(option: { total: number }, ...numbers: number[]): number {
    if (numbers.length === 0) return option.total

    return sum({ total: option.total + numbers[0] }, ...numbers.slice(1))
}
