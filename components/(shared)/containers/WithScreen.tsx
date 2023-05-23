import { helper } from '@helpers'
import type { JustifyVariant, ScreenVariant } from 'haneulchoistudio'

interface IWithScreen {
    children: React.ReactNode
    screen?: ScreenVariant
    justify?: JustifyVariant
    className?: string
}

const WithScreen = ({
    screen = 'min-screen',
    justify = 'center',
    children,
    className = '',
}: IWithScreen) => {
    return (
        <div
            className={helper.classnames(
                // default className
                'w-full flex flex-col',
                // custom className
                className,
                // screen management
                screen === 'screen' && 'h-screen',
                screen === 'min-screen' && 'min-h-screen',
                // align management
                justify === 'center' && 'justify-center',
                justify === 'end' && 'justify-end',
                justify === 'start' && 'justify-start',
                justify === 'between' && 'justify-between'
            )}
        >
            {children}
        </div>
    )
}

export default WithScreen
