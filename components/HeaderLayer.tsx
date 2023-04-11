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
const ContactButton = dynamic(() => import('@studio/components/ContactButton'))
const MobileMenu = dynamic(() => import('@studio/components/MobileMenu'))
const DesktopMenu = dynamic(() => import('@studio/components/DesktopMenu'))

const HeaderLayer = () => {
    const { theme } = useTheme()
    const { isTop, scrollDirection } = useScroll()

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
                    'sticky top-0 left-0 z-40 w-full h-max backdrop-blur-md transition-smooth border-b shadow transform',
                    theme === 'dark'
                        ? 'bg-themeDark/95 text-themeLight'
                        : 'bg-themeLight/90 text-themeDark',
                    [showMobileMenu, isTop].some(Boolean)
                        ? 'border-transparent shadow-transparent'
                        : theme === 'dark'
                        ? 'border-themeDarkLight shadow-themeDarkLight/80'
                        : 'border-themeLightDark/20 shadow-themeLightDark/20',

                    scrollDirection === 'down'
                        ? '-translate-y-[150%] -top-[150%]'
                        : '-top-0 -translate-y-0'
                )}
            >
                <section
                    className={classnames(
                        'w-full max-w-cutoff mx-auto flex justify-between items-center px-6 py-4 2xl:px-0 relative z-10'
                    )}
                >
                    <div className="flex items-center gap-x-2 lg:px-0">
                        <ProfileImage />
                        <Logo />
                    </div>
                    <nav className="flex items-center gap-x-3">
                        <DesktopMenu />
                        <ThemeButton />
                        <ContactButton />
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
                    'fixed w-full transform transition-transform overflow-hidden z-30 shadow-md',
                    showMobileMenu
                        ? '-translate-y-0 top-[4.25rem]'
                        : '-translate-y-[200%] -top-[200%] -mt-64 md:mt-0',

                    theme === 'dark'
                        ? 'bg-themeDark text-themeLight'
                        : 'bg-themeLight text-themeDark',

                    scrollDirection === 'down'
                        ? '-translate-y-[150%] -top-[150%]'
                        : '-top-0 -translate-y-0'
                )}
            >
                <MobileMenu showMobileMenu={showMobileMenu} />
            </aside>
        </>
    )
}
export default HeaderLayer
