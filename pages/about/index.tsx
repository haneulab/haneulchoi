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

// About
const AboutMe = dynamic(() => import('@about-components/images/AboutMe'))
const MyClients = dynamic(() => import('@about-components/images/MyClients'))
const WorkCategories = dynamic(
    () => import('@about-components/images/WorkCategories')
)

const AboutPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center" className="max-w-xl mx-auto">
                            <AboutMe />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
                <WithScreen
                    justify="center"
                    className="bg-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn
                            align="center"
                            className="gap-y-4 max-w-2xl mx-auto"
                        >
                            <MyClients />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
                <WithScreen
                    justify="center"
                    className="bg-gradient-to-b from-themeDarkLight via-themeDarkLight to-themeDark text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn
                            align="center"
                            className="max-w-2xl mx-auto"
                        >
                            <WorkCategories />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

AboutPage.getLayout = (page) => <Primary>{page}</Primary>
export default AboutPage
