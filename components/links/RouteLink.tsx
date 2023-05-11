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
                'capitalize font-e1 transform transition-smooth text-lg',
                props.isCurrentRoute
                    ? 'font-bold underline'
                    : 'font-light text-themeDarkLight/75 lg:hover:text-themeDarkLight'
            )}
        >
            {props.text}
        </Link>
    )
}

export default RouteLink
