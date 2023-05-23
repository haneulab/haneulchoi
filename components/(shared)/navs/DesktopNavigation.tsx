import { helper } from '@helpers'
import Link from 'next/link'

interface IDesktopNavigation {
    routes: { href: string; text: string; isCurrent: boolean }[]
}

const DesktopNavigation = ({ routes }: IDesktopNavigation) => {
    return (
        <nav className="hidden lg:flex items-center gap-x-4">
            {routes.map((route, idx) => (
                <Link
                    key={idx}
                    href={route.href}
                    className={helper.classnames(
                        'font-h font-light transition-smooth opacity-75 lg:hover:opacity-100',
                        route.isCurrent ? 'hidden' : 'block'
                    )}
                >
                    {route.text}
                </Link>
            ))}
        </nav>
    )
}

export default DesktopNavigation
