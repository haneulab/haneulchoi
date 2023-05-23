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

// LANDING
const CatchyTitle = dynamic(
    () => import('@landing-components/texts/CatchyTitle')
)
const CatchyParagraph = dynamic(
    () => import('@landing-components/texts/CatchyParagraph')
)
const MainButtonNavs = dynamic(
    () => import('@landing-components/navs/MainButtonNavs')
)

const IndexPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-gradient-to-b from-themeDark via-themeDark to-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center">
                            <CatchyTitle />
                            <CatchyParagraph />
                            <MainButtonNavs />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

IndexPage.getLayout = (page) => <Primary>{page}</Primary>
export default IndexPage
