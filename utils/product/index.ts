import { UniqueProduct, VariableProduct } from '@studio/models/product.model'
import PersonalBusinessProduct from './items/personal-business.product'
import WebApplicationProduct from './items/web-application.product'
import sReporterProduct from './items/s-reporter.product'
import cManagerProduct from './items/c-manager.product'

class Products {
    constructor(
        public products: Record<
            [
                'Personal & Business',
                'Web Application',
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
    'Personal & Business': PersonalBusinessProduct,
    'Web Application': WebApplicationProduct,
    cManager: cManagerProduct,
    sReporter: sReporterProduct,
})

export default CreateProducts
