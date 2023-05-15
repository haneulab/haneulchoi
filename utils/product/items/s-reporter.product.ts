import { sum } from '../../math'
import { ComputeProduct } from '../compute'
import type {
    UniqueProduct,
    VariableProduct,
} from '@studio/models/product.model'

const sReporterProduct: [UniqueProduct, VariableProduct][number] = {
    productType: 'unique',
    productStatus: 'prepare',
    name: 'sReporter',
    description:
        'Necessary logistics and statistic in a web-based user interface that produces well-defined sales summary and report for your business.',
    directRoute: {
        href: '/products/s-reporter',
        text: 'sReporter Detail',
        icon: null,
    },
    features: [
        {
            name: 'Customer Schema',
            description:
                'Lets you have a cosnsistent schema for each of customers for your business.',
            icon: null,
            whyImportant:
                'Lets you have a cosnsistent schema for each of customers for your business.',
        },
        {
            name: 'Customer Schema',
            description:
                'Lets you have a cosnsistent schema for each of customers for your business.',
            icon: null,
            whyImportant:
                'Lets you have a cosnsistent schema for each of customers for your business.',
        },
    ],
    priceRange: {
        lowerBound: sum(
            { total: 0 },
            // Page
            ComputeProduct.unique.chargePage(2),
            // Hosting
            ComputeProduct.unique.chargeHosting(),
            // Domain
            ComputeProduct.unique.chargeDomain(),
            // Maintenance
            ComputeProduct.unique.chargeAnnualMaintenance()
        ),
        upperBound: sum(
            { total: 0 },
            // Page
            ComputeProduct.unique.chargePage(10),
            // Hosting
            ComputeProduct.unique.chargeHosting(),
            // Domain
            ComputeProduct.unique.chargeDomain(),
            // Maintenance
            ComputeProduct.unique.chargeAnnualMaintenance()
        ),
        variability: 'variable',
    },
    baseComponents: [
        {
            fullName: 'Admin Pannel',
            description: '',
            price: 1,
            shortName: 'AP',
        },
    ],
}

export default sReporterProduct
