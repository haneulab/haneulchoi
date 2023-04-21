/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import { useState } from 'react'
import { MdArrowDownward, MdLightbulb, MdNightlight } from 'react-icons/md'
import { TfiClose } from 'react-icons/tfi'

/**
 * @brief
 * --- DYNAMIC IMPORTS STATEMENTS ----
 */
const MobileNav = dynamic(() => import('@studio/components/navs/MobileNav'))
const MobileNavSocial = dynamic(
    () => import('@studio/components/navs/MobileNavSocial')
)

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const HeaderLayer = () => {
    const { theme, onChange } = useTheme()

    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

    function onShowMobileNav() {
        setShowMobileNav(true)
    }
    function onHideMobileNav() {
        setShowMobileNav(false)
    }

    return (
        <>
            <MobileNav showMobileNav={showMobileNav} />
            <MobileNavSocial showMobileNav={showMobileNav} />
            <header
                className={classnames(
                    'fixed top-0 z-40 left-0 w-full flex justify-end items-center p-2 transition-smooth',
                    showMobileNav ? 'gap-x-2' : 'gap-x-0'
                )}
            >
                <button
                    onClick={() =>
                        onChange(theme === 'dark' ? 'light' : 'dark')
                    }
                    className={classnames(
                        'flex items-center transition-smooth p-1 text-2xl transform lg:hover:opacity-75',
                        theme === 'dark'
                            ? 'bg-themeDarkLight'
                            : 'bg-themeLightDark text-themeLight',
                        showMobileNav ? 'rounded-full' : 'rounded-0'
                    )}
                >
                    {theme === 'dark' ? <MdLightbulb /> : <MdNightlight />}
                </button>
                {showMobileNav ? (
                    <button
                        onClick={onHideMobileNav}
                        className={classnames(
                            'flex items-center transition-smooth p-2 text-2xl bg-red-500 text-themeLight transform lg:hover:opacity-75',
                            showMobileNav ? 'rounded-full' : 'rounded-0'
                        )}
                    >
                        <TfiClose />
                    </button>
                ) : (
                    <button
                        onClick={onShowMobileNav}
                        className={classnames(
                            'flex items-center transition-smooth p-1 text-2xl transform lg:hover:opacity-75',
                            theme === 'dark'
                                ? 'bg-themeDarkLight'
                                : 'bg-themeLightDark text-themeLight',
                            showMobileNav ? 'rounded-full' : 'rounded-0'
                        )}
                    >
                        <MdArrowDownward />
                    </button>
                )}
            </header>
        </>
    )
}

export default HeaderLayer
