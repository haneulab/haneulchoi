interface RelevantProductFeature {
    featureTitle: string
    featureExplanation?: string
    featureIcon?: React.ReactNode
    featureLink?: {
        href?: string
        text?: string
    }
}

interface RelevantProductRoute {
    href?: string
    text?: string
    icon?: React.ReactNode
}

interface Product {
    title?: string
    description?: string

    price?: {
        from: number
        to: number
    }

    relevantRoute: RelevantProductRoute

    relevantFeatures: RelevantProductFeature[]
}

class __Product_Utility__ {
    constructor(
        public products: Record<
            [
                'Portfolio Website',
                'Web Application',
                'Digital Manager System'
            ][number],
            Product
        >
    ) {
        this.products = products
    }

    public insertRouteIcon(
        key: keyof typeof this.products,
        icon: React.ReactNode
    ) {
        this.products[key].relevantRoute.icon = icon
    }
}

const ProductUtility = new __Product_Utility__({
    'Portfolio Website': {
        title: 'Portfolio Website',
        description:
            'Do you need your portfolio website for your business or personal career interest? Your portfolio product will be based on the following features.',
        price: {
            from: 500,
            to: 2500,
        },
        relevantRoute: {
            href: '/portfolio',
            text: 'View Demo Portfolio',
            icon: null,
        },
        relevantFeatures: [
            {
                featureTitle: 'Customizability',
                featureExplanation: `Since I hard-code every aspect of impleneting websites with coding, it is fully customizable. This means what
                    you expect will be satisfiable.`,
            },
            {
                featureTitle: 'Responsiveness',
                featureExplanation: `I take mobile-first-approach when I
                    build websites. Therefore, your portfolio will have
                    responsive in most of the exisiting devices out
                    there.`,
            },
            {
                featureTitle: 'SEO',
                featureExplanation: `In order to help your target audiences view your
                    website, developers need to follow Search Engine Optimization
                    strategies. I priotize SEO when I built
                    clients websites.`,
            },
        ],
    },
    'Web Application': {
        title: 'Web Application',
        description:
            'You have a great idea for application project, but do not know have coders in your team? I am here to become the coder of your team in your project.',
        price: {
            from: 1500,
            to: 12500,
        },
        relevantRoute: {
            href: '/portfolio',
            text: 'View Demo Web App',
            icon: null,
        },
        relevantFeatures: [
            {
                featureTitle: 'MVP',
                featureExplanation: `It is always good to start small and scale up. For this reason, I built MVPs (minimal viable products) to make your idea come in reality.`,
            },
            {
                featureTitle: 'Frontend & Backend',
                featureExplanation: `Whether you need a minimal or strong backend, I can provide both frontend and full-stack web applications for your needs.`,
            },
            {
                featureTitle: 'Techstacks',
                featureExplanation: `I use modern and high-featured tech-stacks such as TypeScript, React, NextJs, MongoDatabase, Firebase, Git, Github.`,
            },
        ],
    },
    'Digital Manager System': {
        title: 'Digital Manager System',
        description:
            'For businesses, it is important to keep track of incoming and outgoing informations & store them to retrieve whenever needed.',
        price: {
            from: 1750,
            to: 3250,
        },
        relevantRoute: {
            href: '/portfolio',
            text: 'See Example App',
            icon: null,
        },
        relevantFeatures: [
            {
                featureTitle: 'NextReport',
                featureExplanation: `From individual sales logistic to final summary of sales stored in the system, NextReport is a interface-friendly invoicing application that you can use with any devices with a browser.`,
                featureLink: {
                    href: '/products/nextreport',
                    text: 'Learn NextReport',
                },
            },
            {
                featureTitle: 'NextStorage',
                featureExplanation: `Store customers coming in to your business, keep in touch with them, and manage daily meeting schedules with them. NextStorage helps to store customer informations, contact, and schedule.`,
                featureLink: {
                    href: '/products/nextstorage',
                    text: 'Learn NextStorage',
                },
            },
        ],
    },
})

export default ProductUtility
