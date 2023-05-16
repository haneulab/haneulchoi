import type { ColorVariant } from 'studio'
import UIUtility from 'utils/ui'

interface IProductDescription {
    description: string
    background: ColorVariant
}

const ProductDescription = ({
    description,
    background,
}: IProductDescription) => {
    return (
        <p
            className={UIUtility.classnames(
                'text-center font-h  lg:text-lg leading-7 lg:leading-8 2xl:text-xl 2xl:leading-9 mb-8 max-w-2xl',
                background === 'dark'
                    ? 'text-themeLightDark/75'
                    : 'text-themeDarkLight/50'
            )}
        >
            {description}
        </p>
    )
}

export default ProductDescription
