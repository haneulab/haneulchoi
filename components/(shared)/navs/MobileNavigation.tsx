import { helper } from '@helpers'
import Link from 'next/link'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { TfiClose } from 'react-icons/tfi'
import { HiArrowRight } from 'react-icons/hi'
interface IMobileNavigation {
    routes: { href: string; text: string; isCurrent: boolean }[]
}

const MobileNavigation = ({ routes }: IMobileNavigation) => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false)

    function onShowNavigation() {
        setShowNavigation(true)
    }
    function onHideNavigation() {
        setShowNavigation(false)
    }

    return (
        <>
            <nav className="lg:hidden flex items-center gap-x-4 fixed right-4 z-50">
                <button
                    onClick={
                        showNavigation ? onHideNavigation : onShowNavigation
                    }
                >
                    {showNavigation ? (
                        <TfiClose size={22} />
                    ) : (
                        <BiMenu size={26} />
                    )}
                </button>
            </nav>
            <aside
                className={helper.classnames(
                    'z-40 fixed w-full left-0 h-max transform transition-all duration-[0.45s] ease-in-out bg-themeDark/95 backdrop-blur-md shadow-md shadow-themeLightDark/5',
                    showNavigation
                        ? '-translate-y-0 -top-0'
                        : '-translate-y-full -top-full'
                )}
            >
                <section className="p-4">
                    <ul className="flex flex-col gap-y-4">
                        {routes.map((route, idx) => (
                            <Link
                                key={idx}
                                href={route.href}
                                className={helper.classnames(
                                    'font-h font-base transition-smooth items-center gap-x-3',
                                    route.isCurrent ? 'hidden' : 'flex'
                                )}
                            >
                                <HiArrowRight size={18} />
                                <span>{route.text}</span>
                            </Link>
                        ))}
                    </ul>
                </section>
            </aside>
        </>
    )
}

export default MobileNavigation
