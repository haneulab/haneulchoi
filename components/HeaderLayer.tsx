import dynamic from 'next/dynamic'
import { classnames } from '@studio/utils/classnames'
import { useTheme } from '@studio/hooks/useTheme'
import { useScroll } from '@studio/hooks/useScroll'
import { useState } from 'react'

const Logo = dynamic(() => import('@studio/components/Logo'))
const ProfileImage = dynamic(() => import('@studio/components/ProfileImage'))
const ThemeButton = dynamic(() => import('@studio/components/ThemeButton'))
const MobileMenuButton = dynamic(
    () => import('@studio/components/MobileMenuButton')
)
const MobileMenu = dynamic(() => import('@studio/components/MobileMenu'))
const DesktopMenu = dynamic(() => import('@studio/components/DesktopMenu'))

const HeaderLayer = () => {
    const { theme } = useTheme()
    const { isTop } = useScroll()

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    function onShowMobileMenu() {
        setShowMobileMenu(true)
    }
    function onHideMobileMenu() {
        setShowMobileMenu(false)
    }

    return (
        <>
            <header
                className={classnames(
                    'sticky top-0 left-0 z-40 w-full h-max backdrop-blur-md transition-all border-b shadow',
                    theme === 'dark'
                        ? 'bg-normalDark/95 text-white'
                        : 'bg-white/90 text-normalDark',
                    [showMobileMenu, isTop].some(Boolean)
                        ? 'border-transparent shadow-transparent'
                        : theme === 'dark'
                        ? 'border-normalDark shadow-navyDark/80'
                        : 'border-normalDark/20 shadow-grayDark/20'
                )}
            >
                <section className="w-full max-w-cutoff mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-x-2 px-4 py-3 lg:px-0">
                        <ProfileImage />
                        <Logo />
                    </div>
                    <nav className="flex items-center gap-x-3 lg:gap-x-6 px-4 py-3 ">
                        <DesktopMenu />
                        <ThemeButton />
                        <MobileMenuButton
                            showMobileMenu={showMobileMenu}
                            onShowMobileMenu={onShowMobileMenu}
                            onHideMobileMenu={onHideMobileMenu}
                        />
                    </nav>
                </section>
            </header>
            <aside
                className={classnames(
                    'sticky w-full transform transition-all overflow-hidden z-30',
                    showMobileMenu
                        ? isTop
                            ? '-top-0 -translate-y-0'
                            : 'top-14 -translate-y-0'
                        : '-top-full -translate-y-full -mt-60 md:-mt-0',
                    theme === 'dark'
                        ? 'bg-normalDark text-grayWhite'
                        : 'bg-white text-normalDark'
                )}
            >
                <MobileMenu showMobileMenu={showMobileMenu} />
            </aside>
        </>
    )
}
export default HeaderLayer
