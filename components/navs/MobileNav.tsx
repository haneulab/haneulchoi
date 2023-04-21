/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import Link from 'next/link'

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface IMobileNav {
    showMobileNav: boolean
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const MobileNav = (props: IMobileNav) => {
    const { theme } = useTheme()

    return (
        <nav
            className={classnames(
                'fixed w-[40%] sm:w-[35%] lg:w-[20%] 2xl:w-[10%] right-0 z-30 top-0 transition-all duration-[0.25s] ease-in-out transform border-l border-b',
                props.showMobileNav
                    ? [
                          '-top-0 -translate-y-0 shadow',
                          theme === 'dark'
                              ? 'border-themeDarkLight/50 shadow-themeLightDark/10'
                              : 'border-themeLightDark/25 shadow-themeLightDark/10',
                      ].join(' ')
                    : '-translate-y-full -top-full border-transparent bg-transparent',
                theme === 'dark' ? ' bg-themeDark' : ' bg-themeLight'
            )}
        >
            <section className="pt-16 px-4 pb-4">
                <ul className="w-full flex flex-col gap-y-4">
                    <Link
                        href={'/projects'}
                        className="flex justify-between items-center transition-smooth lg:hover:opacity-75"
                    >
                        <span className="font-p font-bold w-[30px] h-[30px] border rounded flex justify-center items-center">
                            P
                        </span>
                        <span className="font-medium">Projects</span>
                    </Link>
                    <Link
                        href={'/packages'}
                        className="flex justify-between items-center transition-smooth lg:hover:opacity-75"
                    >
                        <span className="font-p font-bold w-[30px] h-[30px] border rounded flex justify-center items-center">
                            S
                        </span>
                        <span className="font-medium">Packages</span>
                    </Link>
                    <Link
                        href={'/blogs'}
                        className="flex justify-between items-center transition-smooth lg:hover:opacity-75"
                    >
                        <span className="font-p font-bold w-[30px] h-[30px] border rounded flex justify-center items-center">
                            B
                        </span>
                        <span className="font-medium">Blogs</span>
                    </Link>
                    <Link
                        href={'/contact'}
                        className="flex justify-between items-center transition-smooth lg:hover:opacity-75"
                    >
                        <span className="font-p font-bold w-[30px] h-[30px] border rounded flex justify-center items-center">
                            C
                        </span>
                        <span className="font-medium">Contact</span>
                    </Link>
                </ul>
            </section>
        </nav>
    )
}

export default MobileNav
