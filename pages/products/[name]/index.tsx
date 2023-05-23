import type { Page } from 'haneulchoistudio'
import dynamic from 'next/dynamic'

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

const ProductDetailPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-gradient-to-b from-themeDark via-themeDark to-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center">
                            <h3 className="font-bold text-4xl">
                                ProductDetailPage
                            </h3>
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

ProductDetailPage.getLayout = (page) => <Primary>{page}</Primary>
export default ProductDetailPage
