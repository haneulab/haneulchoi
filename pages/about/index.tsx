import type { StudioPage } from 'studio'
import { UIUtility, AboutUtility } from '@studio/utils'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import AboutMeImage from 'public/static/about_me.png'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
const AboutMap = dynamic(() => import('@studio/components/containers/AboutMap'))
// Link
const HashDirect = dynamic(() => import('@studio/components/links/HashDriect'))

interface PageProps {
    _id: string
}

const AboutPage: StudioPage = (_props: PageProps) => {
    return (
        <>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <Header />
                    <PageHero
                        title="About Me"
                        description="I am a full-stack web developer, and I built portfolio websites, web applications, and web management systems."
                        image={
                            <picture className="block mx-auto w-[80%] max-w-[225px] lg:w-[375px]">
                                <Image
                                    src={AboutMeImage}
                                    alt={'Haneul Choi Studio | About'}
                                />
                            </picture>
                        }
                    >
                        <HashDirect
                            to="learn-more"
                            text="Learn More About Me"
                        />
                    </PageHero>
                    <AboutMap contents={AboutUtility.contents} />
                    <Footer />
                </div>
            </PrimaryLayer>
        </>
    )
}

AboutPage.getLayout = (page) => page
export default AboutPage
