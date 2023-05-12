import dynamic from 'next/dynamic'
import { UIUtility } from '@studio/utils'
import { useState } from 'react'

// Nav
const DesktopDirectory = dynamic(
    () => import('@studio/components/navs/DesktopDirectory')
)
const MobileDirectory = dynamic(
    () => import('@studio/components/navs/MobileDirectory')
)
// Button
const ViewMenu = dynamic(() => import('@studio/components/buttons/ViewMenu'))

type ColorVariant = 'dark' | 'light'

interface IHeader {
    variant?: ColorVariant
}

const Header = ({ variant = 'light' }: IHeader) => {
    const [viewNav, setViewNav] = useState<boolean>(false)

    function onViewNav() {
        setViewNav(true)
    }

    function onHideNav() {
        setViewNav(false)
    }

    return (
        <header
            className={UIUtility.classnames(
                'fixed top-0 w-full backdrop-blur-sm z-10 h-max transition-smooth ',
                viewNav
                    ? variant === 'dark'
                        ? 'bg-themeLight/5 text-themeDark lg:bg-themeDark/95 lg:text-themeLightDark'
                        : 'bg-themeDark/5 text-themeLight lg:bg-themeLight/95 lg:text-themeDarkLight'
                    : variant === 'dark'
                    ? 'shadow-none bg-themeDark/95 text-themeLight'
                    : 'shadow-none bg-themeLight/95 text-themeDarkLight'
            )}
        >
            <section className="px-8 py-4 text-center flex justify-center items-center">
                <div className="overflow-hidden flex flex-col gap-y-1">
                    <MobileDirectory
                        onHideNav={onHideNav}
                        viewNav={viewNav}
                        variant={variant}
                    />
                    <DesktopDirectory onHideNav={onHideNav} viewNav={viewNav} />
                    <ViewMenu
                        onViewNav={onViewNav}
                        viewNav={viewNav}
                        variant={variant}
                    />
                </div>
            </section>
        </header>
    )
}

export default Header
