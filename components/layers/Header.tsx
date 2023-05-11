import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { RouteUtility, UIUtility } from '@studio/utils'
import { useState } from 'react'
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb'
import { TfiClose } from 'react-icons/tfi'

// Nav
const DesktopDirectory = dynamic(
    () => import('@studio/components/navs/DesktopDirectory')
)
const MobileDirectory = dynamic(
    () => import('@studio/components/navs/MobileDirectory')
)
// Button
const ViewMenu = dynamic(() => import('@studio/components/buttons/ViewMenu'))

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
        <header
            className={UIUtility.classnames(
                'fixed top-0 w-full backdrop-blur-sm z-10 h-max transition-smooth bg-themeLight/95 text-themeDarkLight ',
                viewNav ? 'shadow-sm' : 'shadow-none'
            )}
        >
            <section className="px-8 py-4 text-center flex justify-center items-center">
                <div className="overflow-hidden flex flex-col gap-y-1">
                    <MobileDirectory onHideNav={onHideNav} viewNav={viewNav} />
                    <DesktopDirectory onHideNav={onHideNav} viewNav={viewNav} />
                    <ViewMenu onViewNav={onViewNav} viewNav={viewNav} />
                </div>
            </section>
        </header>
    )
}

export default Header
