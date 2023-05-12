import { useRouter } from 'next/router'
import { RouteUtility, UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'

// Link
const RouteLink = dynamic(() => import('@studio/components/links/RouteLink'))
// Button
const HideMenu = dynamic(() => import('@studio/components/buttons/HideMenu'))

type ColorVariant = 'dark' | 'light'

interface IMobileDirectory {
    viewNav?: boolean
    onHideNav: () => void
    variant?: ColorVariant
}

const MobileDirectory = ({
    onHideNav,
    viewNav,
    variant = 'light',
}: IMobileDirectory) => {
    const router = useRouter()
    const routes = Object.keys(RouteUtility.routes)
    return (
        <nav
            className={UIUtility.classnames(
                'transition-smooth transform relative px-8 flex flex-col items-center gap-y-4 lg:hidden border',
                viewNav
                    ? variant === 'dark'
                        ? '-top-0 -translate-y-0 bg-themeDark text-themeLight w-full py-6 rounded-lg overflow-hidden border-themeDark/10'
                        : '-top-0 -translate-y-0 bg-themeLight text-themeDark w-full py-6 rounded-lg overflow-hidden border-themeDark/10'
                    : variant === 'dark'
                    ? '-top-full -translate-y-full -mt-[18.5rem] border-transparent'
                    : '-top-full -translate-y-full -mt-[18.5rem] border-transparent'
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
