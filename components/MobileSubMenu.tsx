import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const FaLongArrowAltLeft = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaLongArrowAltLeft)
)

interface IMobileSubMenu {
    text: string
    subMenuComponent: React.ComponentType
    showMobileMenu: boolean
}

const MobileSubMenu = (props: IMobileSubMenu) => {
    const { theme } = useTheme()

    const [showSubMenu, setShowSubMenu] = useState<boolean>(false)

    function onShowSubMenu() {
        setShowSubMenu(true)
    }
    function onHideSubMenu() {
        setShowSubMenu(false)
    }

    useEffect(() => {
        if (!props.showMobileMenu) {
            onHideSubMenu()
        }
    }, [props.showMobileMenu])

    return (
        <>
            <button
                onClick={showSubMenu ? onHideSubMenu : onShowSubMenu}
                className={classnames(
                    'flex justify-between px-6 py-4 transition-smooth',
                    showSubMenu
                        ? theme === 'dark'
                            ? 'bg-black/25 text-white'
                            : 'bg-grayDark text-white'
                        : ''
                )}
            >
                <span className="font-medium text-lg font-figtree">
                    {props.text}
                </span>
                <span>
                    <FaLongArrowAltLeft
                        className={classnames(
                            'text-2xl transform transition-all duration-[0.25s]',
                            showSubMenu ? '-rotate-[90deg]' : 'rotate-[0deg]'
                        )}
                    />
                </span>
            </button>
            {showSubMenu && <props.subMenuComponent />}
        </>
    )
}

export default MobileSubMenu
