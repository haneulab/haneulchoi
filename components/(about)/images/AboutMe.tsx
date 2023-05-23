import dynamic from 'next/dynamic'
import AboutMeImage from 'public/static/about_me.png'

const ImageContent = dynamic(
    () => import('@shared-components/containers/ImageContent')
)
const AboutMe = () => {
    return (
        <>
            <ImageContent
                image={AboutMeImage}
                alt="About Haneul Choi | Haneul Choi Studio"
                className="rounded-full overflow-hidden"
            />
            <h3 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl font-h mt-12 mb-4">
                About Me
            </h3>
            <p className="font-h text-xl lg:text-2xl text-center leading-8 lg:leading-10 text-themeLight">
                I am a freelancing software developer based in California, USA.
            </p>
        </>
    )
}

export default AboutMe
