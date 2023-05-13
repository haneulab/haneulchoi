import dynamic from 'next/dynamic'

const ProductStageMarker = dynamic(
    () => import('@studio/components/tags/ProductStageMarker')
)

interface IProductTitle {
    stage: 'alpha' | 'beta' | 'released'
    name: string
}

const ProductTitle = ({ stage = 'beta', name }: IProductTitle) => {
    return (
        <span className="inline-flex items-end gap-x-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500">
                {name}
            </span>
            <ProductStageMarker stage={stage} />
        </span>
    )
}

export default ProductTitle
