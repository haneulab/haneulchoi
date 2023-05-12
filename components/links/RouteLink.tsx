import Link from 'next/link'
import UIUtility from 'utils/ui'

interface IRouteLink {
    href?: string
    text?: string
    isCurrentRoute?: boolean
}

const RouteLink = (props: IRouteLink) => {
    return (
        <Link
            href={props.href}
            className={UIUtility.classnames(
                'capitalize font-e1 transform transition-smooth text-lg h-max',
                props.isCurrentRoute
                    ? 'font-bold bg-themeDark text-themeLight'
                    : 'font-light opacity-60 lg:hover:opacity-100'
            )}
        >
            {props.text}
        </Link>
    )
}

export default RouteLink
