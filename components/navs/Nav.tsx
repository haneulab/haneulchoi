/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'

/**
 * @brief
 * --- DYNAMIC IMPORTS STATEMENTS ----
 */
const NavMenuButton = dynamic(
    () => import('@studio/components/navs/NavMenuButton')
)

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface NavMenuItem {
    icon?: React.ReactNode
    text?: string
    href?: string
}

interface INav {
    items: NavMenuItem[]
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Nav = (props: INav) => {
    return (
        <nav className="sticky bottom-0 w-full lg:w-max mx-auto rounded-t-md shdaow bg-themeDarkLight text-themeLight">
            <section className="max-w-cutoff mx-auto flex justify-between sm:justify-center lg:justify-start">
                {props.items.map((item, idx) => (
                    <NavMenuButton {...item} key={idx} />
                ))}
            </section>
        </nav>
    )
}

export default Nav
