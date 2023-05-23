import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const DesktopNavigation = dynamic(
    () => import('@shared-components/navs/DesktopNavigation')
)
const MobileNavigation = dynamic(
    () => import('@shared-components/navs/MobileNavigation')
)
const Logo = dynamic(() => import('@shared-components/links/Logo'))

const Header = () => {
    const router = useRouter()

    const routes = [
        { href: '/', text: 'Home', isCurrent: router.pathname === '/' },
        {
            href: '/about',
            text: 'About',
            isCurrent: router.pathname === '/about',
        },
        {
            href: '/products',
            text: 'Products',
            isCurrent: router.pathname === '/products',
        },
        {
            href: '/life/blogs',
            text: 'Blogs',
            isCurrent: router.pathname === '/life/blogs',
        },
        {
            href: '/life/gallery',
            text: 'Gallery',
            isCurrent: router.pathname === '/life/gallery',
        },
        {
            href: '/contact',
            text: 'Contact',
            isCurrent: router.pathname === '/contact',
        },
    ]

    return (
        <header className="fixed top-0 z-40 w-full left-0 bg-themeDarkLight/90 backdrop-blur-sm text-themeLight">
            <section className="p-4 w-full mx-auto flex justify-between">
                <Logo />
                <MobileNavigation routes={routes} />
                <DesktopNavigation routes={routes} />
            </section>
        </header>
    )
}

export default Header
