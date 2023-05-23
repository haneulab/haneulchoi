import dynamic from 'next/dynamic'
import type { Page } from 'haneulchoistudio'

// SHARED
const Primary = dynamic(() => import('@shared-components/layers/Primary'))
const Slider = dynamic(() => import('@shared-components/layers/Slider'))
const WithPadding = dynamic(
    () => import('@shared-components/layers/WithPadding')
)
const Header = dynamic(() => import('@shared-components/layers/Header'))
const Footer = dynamic(() => import('@shared-components/layers/Footer'))
const WihtColumn = dynamic(
    () => import('@shared-components/containers/WithColumn')
)
const WithScreen = dynamic(
    () => import('@shared-components/containers/WithScreen')
)
const CatchyTitle = dynamic(
    () => import('@shared-components/texts/CatchyTitle')
)
const CatchyParagraph = dynamic(
    () => import('@shared-components/texts/CatchyParagraph')
)

// LANDING
const CatchyImage = dynamic(
    () => import('@landing-components/images/CatchyImage')
)
const MainButtons = dynamic(
    () => import('@landing-components/navs/MainButtons')
)

const IndexPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center">
                            <CatchyImage />
                            <CatchyTitle title="Build Your Idea." />
                            <CatchyParagraph message="From a simple landing page to a complex web applications." />
                            <MainButtons />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

IndexPage.getLayout = (page) => <Primary>{page}</Primary>
export default IndexPage
