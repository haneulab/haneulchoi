import { sum } from '../../math'
import { ComputeProduct } from '../compute'
import type {
    UniqueProduct,
    VariableProduct,
} from '@studio/models/product.model'

const PersonalBusinessProduct: [UniqueProduct, VariableProduct][number] = {
    productType: 'variable',
    productStatus: 'released',
    name: 'Personal & Business',
    description:
        'Create your personal/business websites within a week with a sophisticated and fully-customisable UI/UX and interactivity.',
    priceRange: {
        lowerBound: sum(
            // initial total set to 0
            { total: 0 },
            // add page price with number of pages
            ComputeProduct.variable.chargePage(4),
            // add hosting price
            ComputeProduct.variable.chargeHosting('v1'),
            // add domain price
            ComputeProduct.variable.chargeDomain('v1'),
            // add maintenance price
            ComputeProduct.variable.chargeMaintenance('v1')
        ),
        upperBound: sum(
            // initial total set to 0
            { total: 0 },
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
            name: 'Modern UI Design',
            description:
                "Let's analyze and follow the trend from websites designed from experts today.",
            whyImportant: `It does not matter if you have useful content for your target audiences if you have a terrible and outdated user interface. Using modern design pattern helps ease your audiences' presence in your website.`,
        },
        {
            name: 'Customizability',
            description:
                'From colors, positions, and animations, you have the ability to cutomize your site however you want.',
            whyImportant: `The most important goal for building a web application is to grow, adding new features and updating outdated features. To do this, we need a scalable architecture in our codebase and tools that we use.`,
        },
        {
            name: 'SEO',
            description:
                'Strengthen SEO (Search Engine Optimization) and reach more audiences in your websites.',
            whyImportant: `In the end, the goal is to attract audiences into your website, as browsers forify and restric many more search rules, having a good SEO plan is very important to attract more audiences so for your websites.`,
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
}

export default PersonalBusinessProduct
