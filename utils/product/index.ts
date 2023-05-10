interface RelevantProductFeature {
    featureTitle: string
    featureExplanation?: string
    featureIcon?: React.ReactNode
}

interface RelevantProductRoute {
    href?: string
    text?: string
    icon?: React.ReactNode
}

interface Product {
    title?: string
    description?: string

    relevantRoute: RelevantProductRoute

    relevantFeatures: RelevantProductFeature[]
}
const productNames = [
    'Portfolio Website',
    'Web Application',
    'Web Manager System',
]

class __Product_Utility__ {
    constructor(
        public products: Record<
            [
                'Portfolio Website',
                'Web Application',
                'Web Manager System'
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
        relevantRoute: {
            href: '/portfolio',
            text: 'View Portfolios',
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
            'Do you need your portfolio website for your business or personal career interest? Your portfolio product will be based on the following features.',
        relevantRoute: {
            href: '/portfolio',
            text: 'View Portfolios',
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
    'Web Manager System': {
        title: 'Digital Manager System',
        description:
            'Do you need your portfolio website for your business or personal career interest? Your portfolio product will be based on the following features.',
        relevantRoute: {
            href: '/portfolio',
            text: 'View Portfolios',
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
})

export default ProductUtility
