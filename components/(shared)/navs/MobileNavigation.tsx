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
            <nav className="lg:hidden flex items-center gap-x-4 fixed right-4 top-4 z-50">
                <button
                    onClick={
                        showNavigation ? onHideNavigation : onShowNavigation
                    }
                >
                    {showNavigation ? (
                        <TfiClose size={32} />
                    ) : (
                        <BiMenu size={32} />
                    )}
                </button>
            </nav>
            <aside
                className={helper.classnames(
                    'z-40 fixed lg:hidden w-full left-0 h-max transform transition-all duration-[0.45s] ease-in-out  backdrop-blur-md border-b',
                    showNavigation
                        ? '-translate-y-0 -top-0 border-themeLightDark/10 bg-themeModal'
                        : '-translate-y-full -top-full border-transparent bg-transparent'
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
