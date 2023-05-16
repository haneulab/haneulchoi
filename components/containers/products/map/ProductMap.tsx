import { UIUtility } from '@studio/utils'
import {
    type UniqueProduct,
    type VariableProduct,
} from '@studio/models/product.model'
import { ColorVariant } from 'studio'
import dynamic from 'next/dynamic'

const ProductName = dynamic(() => import('./ProductName'))
const ProductDescription = dynamic(() => import('./ProductDescription'))
const ProductDirectRoute = dynamic(() => import('./ProductDirectRoute'))
const ProductPriceTag = dynamic(() => import('./ProductPriceTag'))
const ProductFeaturesSection = dynamic(() => import('./ProductFeaturesSection'))
const ProductSectionBreaker = dynamic(() => import('./ProductSectionBreaker'))
const VariableProductCard = dynamic(() => import('./VariableProductCard'))

type IProductMap = [UniqueProduct, VariableProduct][number] & {
    background: ColorVariant
}

const ProductMap = ({
    name,
    productStatus,
    description,
    directRoute,
    features,
    priceRange,
    productType,
    background,
    options,
}: IProductMap) => {
    return (
        <div
            className={UIUtility.classnames(
                'min-h-screen flex flex-col justify-center items-center w-full',
                background === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLight/5 text-themeDark'
            )}
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article
                    className={UIUtility.classnames(
                        'flex flex-col items-center mb-10 2xl:mb-12 pb-10 2xl:pb-12 border-b-2 w-full max-w-4xl mx-auto',
                        background === 'dark'
                            ? 'border-themeLight/5'
                            : 'border-themeDarkLight/5'
                    )}
                >
                    <ProductName name={name} />
                    <ProductDescription
                        description={description}
                        background={background}
                    />
                    <ProductDirectRoute
                        {...directRoute}
                        background={background}
                    />
                </article>
                <div className="flex flex-col gap-y-16 lg:gap-y-24">
                    <ProductPriceTag
                        lower={priceRange.lowerBound}
                        upper={priceRange.upperBound}
                        variability={priceRange.variability}
                    />
                    {productStatus === 'released' && (
                        <>
                            {productType === 'variable' && (
                                <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-0">
                                    {options.map((option, idx) => (
                                        <VariableProductCard
                                            option={option}
                                            key={idx}
                                        />
                                    ))}
                                </ul>
                            )}
                            <ProductSectionBreaker />
                            <ProductFeaturesSection
                                features={features}
                                background={background}
                            />
                        </>
                    )}
                    {productStatus === 'prepare' && (
                        <div className="p-6 border-l-4 border-pink-500 bg-pink-500/5 relative z-0 w-full max-w-2xl mx-auto">
                            <p className="font-h text-base lg:text-lg leading-7 lg:leading-8 text-pink-500 text-center">
                                This product is currently not ready for sale.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default ProductMap
