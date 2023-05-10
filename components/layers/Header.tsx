import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { RouteUtility, UIUtility } from '@studio/utils'
import { useState } from 'react'
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb'

// Link
const RouteLink = dynamic(() => import('@studio/components/links/RouteLink'))

const Header = () => {
    const router = useRouter()
    const routes = Object.keys(RouteUtility.routes)

    const [viewNav, setViewNav] = useState<boolean>(false)

    function onViewNav() {
        setViewNav(true)
    }

    function onHideNav() {
        setViewNav(false)
    }

    return (
        <header className="fixed top-0 w-full bg-themeLight z-10 h-max">
            <section className="px-8 py-4 text-center flex justify-center items-center">
                <button
                    role="button"
                    aria-label="mobile-navigation-button"
                    className="block lg:hidden"
                >
                    <AiOutlineMenu size={24} />
                </button>
                <div className="overflow-hidden flex flex-col gap-y-1">
                    <nav
                        className={UIUtility.classnames(
                            'hidden lg:flex items-center gap-x-4 transition-smooth transform relative',
                            viewNav
                                ? '-top-0 -translate-y-0'
                                : '-top-full -translate-y-full -mt-8'
                        )}
                    >
                        {routes.map((key, idx) => (
                            <RouteLink
                                key={idx}
                                href={RouteUtility.routes[key].href}
                                isCurrentRoute={RouteUtility.isEqual(
                                    key,
                                    router.pathname
                                )}
                                text={key}
                            />
                        ))}
                    </nav>
                    <button
                        onClick={viewNav ? onHideNav : onViewNav}
                        className={UIUtility.classnames(
                            'hidden text-sm font-light font-h lg:flex items-center justify-center gap-x-2 mx-auto transition-smooth lg:hover:opacity-75',
                            viewNav ? 'text-red-400' : 'text-slate-400'
                        )}
                    >
                        {viewNav ? (
                            <>
                                <TbEyeglassOff size={20} />
                            </>
                        ) : (
                            <>
                                <TbEyeglass size={20} />
                            </>
                        )}
                    </button>
                </div>
            </section>
        </header>
    )
}

export default Header
