import Link from 'next/link'
import UIUtility from 'utils/ui'
import type { ColorVariant } from 'studio'

interface IProductDirectRoute {
    href: string
    text: string
    icon?: React.ReactNode
    background: ColorVariant
}

const ProductDirectRoute = ({
    background,
    href,
    text,
    icon,
}: IProductDirectRoute) => {
    return (
        <div>
            <Link
                href={href}
                className={UIUtility.classnames(
                    'w-full p-0.5 border block rounded-md  transition-smooth ',
                    background === 'dark'
                        ? 'border-themeLightDark/50 lg:hover:bg-themeLight lg:hover:text-themeDark'
                        : 'border-themeDarkLight/50 lg:hover:bg-themeDark lg:hover:text-themeLight'
                )}
            >
                <span className="flex items-center font-h text-lg font-medium rounded px-6 p-2 gap-x-4">
                    {icon && icon}
                    <span>{text}</span>
                </span>
            </Link>
        </div>
    )
}

export default ProductDirectRoute
