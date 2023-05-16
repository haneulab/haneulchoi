import type { ProductFeatureInfo } from '@studio/models/product.model'
import dynamic from 'next/dynamic'
import type { ColorVariant } from 'studio'
import UIUtility from 'utils/ui'

const ProductFeatureWhyImportant = dynamic(
    () =>
        import(
            '@studio/components/containers/products/map/ProductFeatureWhyImportant'
        )
)

interface IProductFeaturesSection {
    features: ProductFeatureInfo[]
    background: ColorVariant
}

const ProductFeaturesSection = ({
    features,
    background,
}: IProductFeaturesSection) => {
    return (
        <article className="mx-auto max-w-lg flex flex-col gap-y-12 lg:gap-y-16 relative z-0">
            {features.map((feature, idx) => (
                <div key={idx}>
                    <h4
                        className={UIUtility.classnames(
                            'text-center text-transparent bg-clip-text bg-gradient-to-r  font-medium text-2xl lg:text-3xl 2xl:text-4xl font-h mb-4',
                            background === 'dark'
                                ? 'from-themeLight to-themeLight'
                                : 'from-themeDarkLight  to-themeDarkLight'
                        )}
                    >
                        {feature.name}
                    </h4>
                    <ProductFeatureWhyImportant
                        feature={feature.name}
                        description={feature.description}
                        whyImportant={feature.whyImportant}
                    />
                </div>
            ))}
        </article>
    )
}

export default ProductFeaturesSection
