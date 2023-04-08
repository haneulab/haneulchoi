import Link from 'next/link'

const DesktopMenu = () => {
    const routes = [
        { href: '/about', text: 'About' },
        { href: '/package', text: 'Package' },
        { href: '/project', text: 'Project' },
        { href: '/blog', text: 'Blog' },
    ]

    return (
        <ul className="md:flex items-center hidden gap-x-4">
            {routes.map((route, idx) => (
                <Link
                    href={route.href}
                    key={idx}
                    className="font-medium font-figtree transition-all duration-[0.25s] lg:hover:opacity-70"
                >
                    {route.text}
                </Link>
            ))}
        </ul>
    )
}

export default DesktopMenu
