import { helper } from '@helpers'

interface IWithLists {
    children: React.ReactNode
    className?: string
    gap?: number
}

const WithLists = ({ children, gap = 0, className = '' }: IWithLists) => {
    const gapOptions = {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8',
        9: 'gap-9',
        10: 'gap-10',
    } as const

    return (
        <ul
            className={helper.classnames(
                'w-full flex flex-col',
                className,
                gapOptions[gap]
            )}
        >
            {children}
        </ul>
    )
}

export default WithLists
