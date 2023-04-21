/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import Link from 'next/link'

/**
 * @brief
 * --- DYNAMIC IMPORTS STATEMENTS ----
 */
interface INavMenuButton {
    icon?: React.ReactNode
    text?: string
    href?: string
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const NavMenuButton = (props: INavMenuButton) => {
    return (
        <Link
            href={props.href}
            className="flex flex-col items-center gap-y-1.5 p-6 text-sm lg:text-base transition-smooth lg:hover:opacity-100 opacity-80"
        >
            {props.icon}
            <span className="font-p font-medium">{props.text}</span>
        </Link>
    )
}

export default NavMenuButton
