import { helper } from '@helpers'
import type { AlignVariant, JustifyVariant } from 'haneulchoistudio'

interface IWithColumn {
    children: React.ReactNode
    className?: string
    justify?: JustifyVariant
    align?: AlignVariant
}

const WihtColumn = ({
    children,
    align = 'start',
    justify = 'start',
    className = '',
}: IWithColumn) => {
    return (
        <article
            className={helper.classnames(
                // defualt className
                'flex flex-col',
                // custom className
                className,
                // align management
                align === 'center' && 'items-center',
                align === 'start' && 'items-start',
                align === 'end' && 'items-end',
                // justify management
                justify === 'start' && 'justify-start',
                justify === 'center' && 'justify-center',
                justify === 'end' && 'justify-end',
                justify === 'between' && 'justify-between'
            )}
        >
            {children}
        </article>
    )
}

export default WihtColumn
