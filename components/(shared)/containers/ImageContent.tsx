import { helper } from '@helpers'
import Image, { StaticImageData } from 'next/image'

interface IImageContent {
    image: StaticImageData
    alt: string
    className?: string
}

const ImageContent = ({
    alt = 'Image Data | Haneul Choi Studio',
    image,
    className = '',
}: IImageContent) => {
    return (
        <picture
            className={helper.classnames(
                'block w-full max-w-[225px] lg:max-w-[275px] 2xl:max-w-[325px] mx-auto',
                className
            )}
        >
            <Image src={image} alt={alt} />
        </picture>
    )
}

export default ImageContent
