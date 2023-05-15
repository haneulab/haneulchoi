import { UniqueProduct, VariableProduct } from '@studio/models/product.model'
import { ComputeProduct } from './compute'

class Products {
    constructor(
        public products: Record<
            [
                'Personal & Business',
                'Web Applications',
                'cManager' /** Clinic Manager */,
                'sReporter' /** Sales Reporter */
            ][number],
            [UniqueProduct, VariableProduct][number]
        >
    ) {
        this.products = products
    }

    public static sum(total: number, ...prices: number[]): number {
        if (prices.length === 0) return total

        return Products.sum(total + prices[0], ...prices.slice(1))
    }
}

const CreateProducts = new Products({
    'Personal & Business': {
        productType: 'variable',
        name: 'Personal & Business',
        description:
            'Create your personal/business websites within a week with a sophisticated and fully-customisable UI/UX and interactivity.',
        priceRange: {
            lowerBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(4),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v1'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v1'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v1')
            ),
            upperBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(6),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v3'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v3'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v3')
            ),
            variability: 'fixed',
        },
        directRoute: {
            href: '/products/personal-business',
            text: 'Personal & Busienss Demo',
            icon: null,
        },
        features: [
            {
                name: 'Customizability',
                description: `Since I hard-code every aspect of impleneting websites with coding, it is fully customizable. This means what
                    you expect will be satisfiable.`,
            },
            {
                name: 'Responsiveness',
                description: `I take mobile-first-approach when I
                    build websites. Therefore, your portfolio will have
                    responsive in most of the exisiting devices out
                    there.`,
            },
            {
                name: 'SEO',
                description: `In order to help your target audiences view your
                    website, developers need to follow Search Engine Optimization
                    strategies. I priotize SEO when I built
                    clients websites.`,
            },
        ],
        options: [
            {
                name: 'Version A',
                description:
                    'Version A is the base model for personal & business website product. It provides essential development & production deliverables to clients.',
                baseComponents: [
                    {
                        fullName: '4 Paged Website',
                        shortName: '4PW',
                        description:
                            '4 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(4),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v1'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v1'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v1'),
                    },
                ],
            },
            {
                name: 'Version B',
                description:
                    'Version B includes 5 internal pages, which equals to 20 page sections.',
                baseComponents: [
                    {
                        fullName: '5 Paged Website',
                        shortName: '5PW',
                        description:
                            '5 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(5),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v2'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v2'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v2'),
                    },
                ],
            },
            {
                name: 'Version C',
                description:
                    'Version C includes 6 internal pages, which equals to 24 page sections.',
                baseComponents: [
                    {
                        fullName: '6 Paged Website',
                        shortName: '6PW',
                        description:
                            '6 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(6),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v3'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v3'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v3'),
                    },
                ],
            },
        ],
    },
    'Web Applications': {
        productType: 'unique',
        name: 'Web Applications',
        description:
            'Have a great idea but do not have experience in building web applications? Let me help your idea come to reality, from building MVP (Minimal Viable Product) to Ecommerce Platform.',
        priceRange: {
            lowerBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(4),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v1'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v1'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v1')
            ),
            upperBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(6),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v3'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v3'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v3')
            ),
            variability: 'fixed',
        },
        directRoute: {
            href: '/products/web-application',
            text: 'View Web Application Detail',
            icon: null,
        },
        features: [
            {
                name: 'Resusable UI',
                description: `Sometime you choose to reuse a specific user interface in other parts of the page. I break down page into atomic UI components so that they can be reused and easily changed anytime.`,
            },
            {
                name: 'Scalability',
                description: `Web application often is not static. It is dynamic. Most of the time, the clients want to grow and scale up the application. Thus, building it in the way it will scale up smoothly is important.`,
            },
            {
                name: 'Easy To Manage',
                description: `I can code, but clients might not. However, I believe it is important for the client to manage their app frequently and effectively. Thus, I integrate a private admin page for them to manage without any code.`,
            },
        ],
        baseComponents: [
            {
                fullName: '4 Paged Website',
                shortName: '4PW',
                description:
                    '4 internal page structure including the landing page.',
                price: ComputeProduct.variable.chargePage(4),
            },
            {
                fullName: 'First-year Maintenance',
                shortName: 'FM',
                description:
                    'First year maintenance that includes text, image, position, color, content updates & changes.',
                price: ComputeProduct.variable.chargeMaintenance('v1'),
            },
            {
                fullName: 'First-year Hosting',
                shortName: 'FH',
                description:
                    'First year hosting that hosting your website to Vercel Cloud.',
                price: ComputeProduct.variable.chargeHosting('v1'),
            },
            {
                fullName: 'First-year Domain',
                shortName: 'FD',
                description:
                    'First year secure domain that provides 1-year secured web address.',
                price: ComputeProduct.variable.chargeDomain('v1'),
            },
        ],
    },
    cManager: {
        productType: 'variable',
        name: 'cManager',
        description:
            'Create your personal/business websites within a week with a sophisticated and fully-customisable UI/UX and interactivity.',
        priceRange: {
            lowerBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(4),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v1'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v1'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v1')
            ),
            upperBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(6),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v3'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v3'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v3')
            ),
            variability: 'fixed',
        },
        directRoute: {
            href: '/products/personal-business',
            text: 'View Personal & Busienss Detail',
            icon: null,
        },
        features: [
            {
                name: 'Customizability',
                description: `Since I hard-code every aspect of impleneting websites with coding, it is fully customizable. This means what
                    you expect will be satisfiable.`,
            },
            {
                name: 'Responsiveness',
                description: `I take mobile-first-approach when I
                    build websites. Therefore, your portfolio will have
                    responsive in most of the exisiting devices out
                    there.`,
            },
            {
                name: 'SEO',
                description: `In order to help your target audiences view your
                    website, developers need to follow Search Engine Optimization
                    strategies. I priotize SEO when I built
                    clients websites.`,
            },
        ],
        options: [
            {
                name: 'Version A',
                description:
                    'Version A is the base model for personal & business website product. It provides essential development & production deliverables to clients.',
                baseComponents: [
                    {
                        fullName: '4 Paged Website',
                        shortName: '4PW',
                        description:
                            '4 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(4),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v1'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v1'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v1'),
                    },
                ],
            },
            {
                name: 'Version B',
                description:
                    'Version B includes 5 internal pages, which equals to 20 page sections.',
                baseComponents: [
                    {
                        fullName: '5 Paged Website',
                        shortName: '5PW',
                        description:
                            '5 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(5),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v2'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v2'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v2'),
                    },
                ],
            },
            {
                name: 'Version C',
                description:
                    'Version C includes 6 internal pages, which equals to 24 page sections.',
                baseComponents: [
                    {
                        fullName: '6 Paged Website',
                        shortName: '6PW',
                        description:
                            '6 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(6),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v3'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v3'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v3'),
                    },
                ],
            },
        ],
    },
    sReporter: {
        productType: 'variable',
        name: 'sReporter',
        description:
            'Create your personal/business websites within a week with a sophisticated and fully-customisable UI/UX and interactivity.',
        priceRange: {
            lowerBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(4),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v1'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v1'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v1')
            ),
            upperBound: Products.sum(
                // initial total set to 0
                0,
                // add page price with number of pages
                ComputeProduct.variable.chargePage(6),
                // add hosting price
                ComputeProduct.variable.chargeHosting('v3'),
                // add domain price
                ComputeProduct.variable.chargeDomain('v3'),
                // add maintenance price
                ComputeProduct.variable.chargeMaintenance('v3')
            ),
            variability: 'fixed',
        },
        directRoute: {
            href: '/products/personal-business',
            text: 'View Personal & Busienss Detail',
            icon: null,
        },
        features: [
            {
                name: 'Customizability',
                description: `Since I hard-code every aspect of impleneting websites with coding, it is fully customizable. This means what
                    you expect will be satisfiable.`,
            },
            {
                name: 'Responsiveness',
                description: `I take mobile-first-approach when I
                    build websites. Therefore, your portfolio will have
                    responsive in most of the exisiting devices out
                    there.`,
            },
            {
                name: 'SEO',
                description: `In order to help your target audiences view your
                    website, developers need to follow Search Engine Optimization
                    strategies. I priotize SEO when I built
                    clients websites.`,
            },
        ],
        options: [
            {
                name: 'Version A',
                description:
                    'Version A is the base model for personal & business website product. It provides essential development & production deliverables to clients.',
                baseComponents: [
                    {
                        fullName: '4 Paged Website',
                        shortName: '4PW',
                        description:
                            '4 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(4),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v1'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v1'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v1'),
                    },
                ],
            },
            {
                name: 'Version B',
                description:
                    'Version B includes 5 internal pages, which equals to 20 page sections.',
                baseComponents: [
                    {
                        fullName: '5 Paged Website',
                        shortName: '5PW',
                        description:
                            '5 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(5),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v2'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v2'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v2'),
                    },
                ],
            },
            {
                name: 'Version C',
                description:
                    'Version C includes 6 internal pages, which equals to 24 page sections.',
                baseComponents: [
                    {
                        fullName: '6 Paged Website',
                        shortName: '6PW',
                        description:
                            '6 internal page structure including the landing page.',
                        price: ComputeProduct.variable.chargePage(6),
                    },
                    {
                        fullName: 'First-year Maintenance',
                        shortName: 'FM',
                        description:
                            'First year maintenance that includes text, image, position, color, content updates & changes.',
                        price: ComputeProduct.variable.chargeMaintenance('v3'),
                    },
                    {
                        fullName: 'First-year Hosting',
                        shortName: 'FH',
                        description:
                            'First year hosting that hosting your website to Vercel Cloud.',
                        price: ComputeProduct.variable.chargeHosting('v3'),
                    },
                    {
                        fullName: 'First-year Domain',
                        shortName: 'FD',
                        description:
                            'First year secure domain that provides 1-year secured web address.',
                        price: ComputeProduct.variable.chargeDomain('v3'),
                    },
                ],
            },
        ],
    },
})

export default CreateProducts
