import dynamic from 'next/dynamic'
import BuildIdeaImage from 'public/static/landing.png'

const ImageContent = dynamic(
    () => import('@shared-components/containers/ImageContent')
)

const CatchyImage = () => {
    return (
        <ImageContent
            image={BuildIdeaImage}
            alt="Landing Image | Haneul Choi Studio"
        />
    )
}

export default CatchyImage
