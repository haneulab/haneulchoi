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
const WithGrids = dynamic(
    () => import('@shared-components/containers/WithGrids')
)
const CatchyTitle = dynamic(
    () => import('@shared-components/texts/CatchyTitle')
)
const CatchyParagraph = dynamic(
    () => import('@shared-components/texts/CatchyParagraph')
)
const WithLists = dynamic(
    () => import('@shared-components/containers/WithLists')
)

// PRODUCTS
const OptionalParagraph = dynamic(
    () => import('@products-components/texts/OptionalParagraph')
)
const MainButtons = dynamic(
    () => import('@products-components/navs/MainButtons')
)
const WebsiteProducts = dynamic(
    () => import('@products-components/images/WebsiteProducts')
)
const WebsiteProductsLinks = dynamic(
    () => import('@products-components/navs/WebsiteProductsLinks')
)
const WebsiteProduct = dynamic(
    () => import('@products-components/cards/WebsiteProduct')
)

const ProductsPage: Page = () => {
    return (
        <>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    screen="min-screen"
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
                <WithScreen
                    screen="min-screen"
                    justify="start"
                    className="bg-gradient-to-b from-themeDarkLight via-themeDarkLight to-themeDark text-themeLight relative"
                >
                    <WithPadding>
                        <WithGrids
                            slideColumn="left"
                            left={
                                <>
                                    <WebsiteProducts />
                                    <WebsiteProductsLinks />
                                </>
                            }
                            right={
                                <>
                                    <WithLists gap={10}>
                                        <WebsiteProduct
                                            title="Modern & Responsive
                                            UI/UX Design"
                                            description="Stop worrying about design
                                            complexity, I use
                                            mobile-first-approach to
                                            make your website responsive
                                            on mobile, tablet, and
                                            desktop devices."
                                        />
                                        <WebsiteProduct
                                            title="Fully Customizable
                                            User Interface"
                                            description=" Because I implement the
                                            design from scratch without
                                            using third-party templates,
                                            your website will be fully
                                            customizable."
                                        />
                                        <WebsiteProduct
                                            title="Quickly Deliverable
                                            Services"
                                            description="With a lot of past and
                                            ongoing project experiences,
                                            I efficiently distribute my
                                            time to deliver the initial
                                            content and maintenance
                                            services to my clients."
                                        />
                                        <WebsiteProduct
                                            title="Affordable Price
                                            Rates"
                                            description="Compared to other marketing
                                            agencies, I offer price
                                            rates based on exactly what
                                            features you need. You will
                                            only be charged for the
                                            features you need."
                                        />
                                    </WithLists>
                                </>
                            }
                        />
                    </WithPadding>
                </WithScreen>
                {/* <WithScreen
                    screen="min-screen"
                    justify="start"
                    className="bg-gradient-to-b from-themeDark via-themeDark to-themeDarkLight text-themeLight relative"
                >
                    <WithPadding>
                        <WithGrids
                            slideColumn="right"
                            right={
                                <>
                                    <ImageContent
                                        image={ProductsWebApplicationsImage}
                                        alt="Products - Web Applications | Haneul Choi Studio"
                                    />
                                    <h3 className="font-bold font-h text-4xl lg:text-5xl my-6 lg:my-8 text-center lg:text-end leading-[1.2] lg:leading-[1.2]">
                                        Modern Full Stack, Web Applications
                                    </h3>
                                    <p className="font-h text-center lg:text-end text-lg lg:text-xl leading-7 lg:leading-8 mb-8">
                                        You have a great idea, but not sure
                                        where to start & how to build?{' '}
                                        <span className="inline-block bg-clip-text font-semibold text-xl lg:text-2xl text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                            Start from here.
                                        </span>
                                    </p>
                                </>
                            }
                            left={
                                <>
                                    <ul className="flex flex-col justify-start gap-y-10">
                                        <div className="flex flex-col gap-y-4">
                                            <BsLightbulb className="text-4xl lg:text-6xl 2xl:text-8x;" />
                                            <h4 className="font-h text-xl lg:text-2xl">
                                                Start From Ideation
                                            </h4>
                                            <p className="font-h font-light text-base lg:text-lg lg:leading-7 opacity-75">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dignissimos placeat quod dicta
                                                deserunt ipsa quaerat, qui, esse
                                                maiores rerum hic expedita vero!
                                                Voluptatibus atque excepturi
                                                debitis est ad harum minima.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-y-4">
                                            <AiOutlineHighlight className="text-4xl lg:text-6xl 2xl:text-8x;" />
                                            <h4 className="font-h text-xl lg:text-2xl">
                                                Sophisticated UX Research
                                            </h4>
                                            <p className="font-h font-light text-base lg:text-lg lg:leading-7 opacity-75">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dignissimos placeat quod dicta
                                                deserunt ipsa quaerat, qui, esse
                                                maiores rerum hic expedita vero!
                                                Voluptatibus atque excepturi
                                                debitis est ad harum minima.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-y-4">
                                            <BsCodeSlash className="text-4xl lg:text-6xl 2xl:text-8x;" />
                                            <h4 className="font-h text-xl lg:text-2xl">
                                                Implementing Application
                                            </h4>
                                            <p className="font-h font-light text-base lg:text-lg lg:leading-7 opacity-75">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dignissimos placeat quod dicta
                                                deserunt ipsa quaerat, qui, esse
                                                maiores rerum hic expedita vero!
                                                Voluptatibus atque excepturi
                                                debitis est ad harum minima.
                                            </p>
                                        </div>
                                    </ul>
                                </>
                            }
                        />
                    </WithPadding>
                </WithScreen> */}
            </Slider>
        </>
    )
}

ProductsPage.getLayout = (page) => <Primary>{page}</Primary>
export default ProductsPage
