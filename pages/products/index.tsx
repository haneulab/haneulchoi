import type { Page } from 'haneulchoistudio'
import dynamic from 'next/dynamic'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'
import {
    SiCreatereactapp,
    SiDwavesystems,
    SiPagespeedinsights,
} from 'react-icons/si'
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

// PRODUCTS
const OptionalParagraph = dynamic(
    () => import('@products-components/texts/OptionalParagraph')
)
const MainButtons = dynamic(
    () => import('@products-components/navs/MainButtons')
)

const ProductsPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center" className="relative">
                            <CatchyTitle title="Explore Products" />
                            <CatchyParagraph
                                message="See products & their details, and request. Then,
                                I will build it for you."
                            />
                            <OptionalParagraph />
                            <MainButtons />
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

ProductsPage.getLayout = (page) => <Primary>{page}</Primary>
export default ProductsPage
