import { helper } from '@helpers'
import dynamic from 'next/dynamic'

interface ISlider {
    header?: React.ReactNode
    children: React.ReactNode
    footer?: React.ReactNode
}

const Slider = ({ header, children, footer }: ISlider) => {
    return (
        <div
            className={helper.classnames(
                'w-full min-h-screen flex flex-col items-center justify-between relative bg-themeDark text-themeLight'
            )}
        >
            {header && header}
            {children}
            {footer && footer}
        </div>
    )
}

export default Slider
