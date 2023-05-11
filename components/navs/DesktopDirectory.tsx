import { UIUtility, RouteUtility } from '@studio/utils'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Link
const RouteLink = dynamic(() => import('@studio/components/links/RouteLink'))
// Button
const HideMenu = dynamic(() => import('@studio/components/buttons/HideMenu'))

interface IDesktopDirectory {
    viewNav?: boolean
    onHideNav: () => void
}

const DesktopDirectory = ({ onHideNav, viewNav }: IDesktopDirectory) => {
    const router = useRouter()
    const routes = Object.keys(RouteUtility.routes)
    return (
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
                    isCurrentRoute={RouteUtility.isEqual(key, router.pathname)}
                    text={key}
                />
            ))}
            <HideMenu onClick={onHideNav} />
        </nav>
    )
}

export default DesktopDirectory
