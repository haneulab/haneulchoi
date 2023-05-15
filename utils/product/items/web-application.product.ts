import { sum } from '../../math'
import { ComputeProduct } from '../compute'
import type {
    UniqueProduct,
    VariableProduct,
} from '@studio/models/product.model'

const WebApplicationProduct: [UniqueProduct, VariableProduct][number] = {
    productType: 'unique',
    productStatus: 'released',
    name: 'Web Application',
    description:
        'Have a great idea but do not have experience in building web applications? Let me help your idea come to reality, from building MVP (Minimal Viable Product) to Ecommerce Platform.',
    priceRange: {
        lowerBound: sum(
            // initial total set to 0
            { total: 0 },
            // add page price with number of pages
            ComputeProduct.variable.chargePage(8),
            // add hosting price
            ComputeProduct.variable.chargeHosting('v3'),
            // add domain price
            ComputeProduct.variable.chargeDomain('v3'),
            // add maintenance price
            ComputeProduct.variable.chargeMaintenance('v3')
        ),
        upperBound: sum(
            // initial total set to 0
            { total: 0 },
            // add page price with number of pages
            ComputeProduct.variable.chargePage(30),
            // add hosting price
            ComputeProduct.variable.chargeHosting('v3'),
            // add domain price
            ComputeProduct.variable.chargeDomain('v3'),
            // add maintenance price
            ComputeProduct.variable.chargeMaintenance('v3')
        ),
        variability: 'variable',
    },
    directRoute: {
        href: '/products/web-application',
        text: 'View Web Application Detail',
        icon: null,
    },
    features: [
        {
            name: 'React-Tailwind Frontend',
            description:
                'Frontend user interface implemented using syntices from React and TailwindCSS libraries.',
            whyImportant: `In modern web applications, the usage of React and TailwindCSS are growing exponentially. There are strong communities and resources to support when encountering problems throughout the development process.`,
        },
        {
            name: 'Scalability',
            description:
                'Build web application with the mindset to grow from the beginning.',
            whyImportant: `The most important goal for building a web application is to grow, adding new features and updating outdated features. To do this, we need a scalable architecture in our codebase and tools that we use.`,
        },
        {
            name: 'Manageability',
            description:
                'Consistentyl access, update, and manage data stored for your application in the database from an admin pannel.',
            whyImportant: `Not everyone can code. In case you need to manage your application data, you will need to access detail of each data stored in the database. Easy and friendly admin user interface helps it a lot.`,
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
}

export default WebApplicationProduct
