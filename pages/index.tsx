import { useTheme } from '@studio/hooks/useTheme'
import type { StudioPage } from 'studio'
import { UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))

interface PageProps {
    _id: string
}

const IndexPage: StudioPage = (_props: PageProps) => {
    const { theme } = useTheme()

    UIUtility

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
                        title="Haneul Choi Studio."
                        description="Hi, My name is Haneul Choi. I am a freelancing web developer based in California, USA."
                        links={[
                            {
                                href: '/project',
                                text: 'Projects',
                            },
                            {
                                href: '/contact',
                                text: 'Contact',
                            },
                        ]}
                    />

                    <Footer />
                </div>
            </PrimaryLayer>
        </>
    )
}

IndexPage.getLayout = (page) => page
export default IndexPage
