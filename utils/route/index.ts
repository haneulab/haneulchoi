interface Route {
    href?: string
    isCurrentRoute?: boolean
}

class __Route__Utility__ {
    constructor(
        public routes: Record<
            [
                'home',
                'about',
                'products',
                'services',
                'portfolio',
                'contact'
            ][number],
            Route
        >
    ) {
        this.routes = routes
    }

    public isEqual(key: string, route: string): boolean {
        return this.routes[key].href === route
    }

    public isMatching(key: string, route: string): boolean {
        return route.includes(this.routes[key].href)
    }
}

const RouteUtility = new __Route__Utility__({
    home: {
        href: '/',
    },
    about: {
        href: '/about',
    },
    products: {
        href: '/products',
    },
    services: {
        href: '/services',
    },
    portfolio: {
        href: '/portfolio',
    },
    contact: {
        href: '/contact',
    },
})

export default RouteUtility
