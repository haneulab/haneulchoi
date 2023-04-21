/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import { classnames } from '@studio/utils/classnames'
import {
    TbBrandGithub,
    TbBrandInstagram,
    TbBrandLinkedin,
} from 'react-icons/tb'

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface IMobileNavSocial {
    showMobileNav: boolean
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const MobileNavSocial = (props: IMobileNavSocial) => {
    return (
        <nav
            className={classnames(
                'fixed z-50 left-0 flex items-center gap-x-4',
                props.showMobileNav
                    ? '-top-0 -translate-y-0'
                    : 'translate-y-full -top-full border-transparent bg-transparent'
            )}
        >
            <ul className="p-4 flex items-center gap-x-2">
                <a
                    href="https://github.com/haneulchoistudio"
                    className="block transform transition-smooth lg:hover:opacity-75 lg:hover:scale-110"
                >
                    <TbBrandGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/company/haneulchoistudio"
                    className="block transform transition-smooth lg:hover:opacity-75 lg:hover:scale-110"
                >
                    <TbBrandLinkedin size={30} />
                </a>
                <a
                    href="https://instagram.com/__sky__e"
                    className="block transform transition-smooth lg:hover:opacity-75 lg:hover:scale-110"
                >
                    <TbBrandInstagram size={30} />
                </a>
            </ul>
        </nav>
    )
}

export default MobileNavSocial
