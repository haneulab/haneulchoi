import dynamic from 'next/dynamic'

// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
// Text
const ProductTitle = dynamic(
    () => import('@studio/components/texts/ProductTitle')
)
// Link
const ProductDirect = dynamic(
    () => import('@studio/components/links/ProductDirect')
)

const NextStorageMap = () => {
    return (
        <PageHero
            gradient
            background="dark"
            title={<ProductTitle stage="beta" name="NextStorage" />}
            description="Save & keep track of customers, have ability to schedule
            meeting with them."
        >
            <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <ProductDirect
                    href="/products/nextreport"
                    name="How It Works"
                />
                <ProductDirect
                    href="/products/nextreport"
                    name="Who It Is For"
                />
            </ul>
        </PageHero>
    )
}

export default NextStorageMap
