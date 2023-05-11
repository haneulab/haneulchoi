import { useRouter } from 'next/router'
import { RouteUtility, UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'

// Link
const RouteLink = dynamic(() => import('@studio/components/links/RouteLink'))
// Button
const HideMenu = dynamic(() => import('@studio/components/buttons/HideMenu'))

interface IMobileDirectory {
    viewNav?: boolean
    onHideNav: () => void
}

const MobileDirectory = ({ onHideNav, viewNav }: IMobileDirectory) => {
    const router = useRouter()
    const routes = Object.keys(RouteUtility.routes)
    return (
        <nav
            className={UIUtility.classnames(
                'transition-smooth transform relative px-8 flex flex-col items-center gap-y-4 lg:hidden',
                viewNav
                    ? '-top-0 -translate-y-0'
                    : '-top-full -translate-y-full -mt-72'
            )}
        >
            <div className="flex justify-end items-center">
                <HideMenu onClick={onHideNav} />
            </div>
            {routes.map((key, idx) => (
                <RouteLink
                    key={idx}
                    href={RouteUtility.routes[key].href}
                    isCurrentRoute={RouteUtility.isEqual(key, router.pathname)}
                    text={key}
                />
            ))}
        </nav>
    )
}

export default MobileDirectory
