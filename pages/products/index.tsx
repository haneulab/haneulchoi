import ImageContent from '@shared-components/containers/ImageContent'
import type { Page } from 'haneulchoistudio'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ProductsWebsiteImage from 'public/static/products_websites.png'
import ProductsWebApplicationsImage from 'public/static/products_web_applications.png'
import { HiArrowRight } from 'react-icons/hi'
import { MdOutlineViewInAr } from 'react-icons/md'
import { VscRequestChanges } from 'react-icons/vsc'
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
                    className="bg-themeDarkLight text-themeLight relative"
                >
                    <WithPadding>
                        <WithGrids
                            slideColumn="left"
                            left={
                                <>
                                    <ImageContent
                                        image={ProductsWebsiteImage}
                                        alt="Products - Websites | Haneul Choi Studio"
                                    />
                                    <h3 className="font-bold font-h text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-start leading-[1.2] lg:leading-[1.2]">
                                        Feature Rich, Affordable Websites
                                    </h3>
                                    <p className="font-h text-center lg:text-start text-lg lg:text-xl leading-7 lg:leading-8 mb-8">
                                        You need a website for your{' '}
                                        <strong className="capitalize">
                                            porfolio
                                        </strong>{' '}
                                        or for your{' '}
                                        <strong className="capitalize">
                                            business
                                        </strong>{' '}
                                        <span className="inline-block bg-clip-text font-semibold text-xl lg:text-2xl text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                            Start from here.
                                        </span>
                                    </p>
                                    <ul className="w-full flex flex-col gap-y-6 sm:max-w-xs">
                                        <Link
                                            href={'/products/websites/info'}
                                            className="font-h flex items-center justify-between gap-x-4 w-full lg:w-full lg:self-end px-8 py-3 rounded-md bg-themeLight text-themeDark transition-smooth font-medium lg:hover:bg-themeDark lg:hover:text-themeLight"
                                        >
                                            <MdOutlineViewInAr size={22} />
                                            <span>Website Products Info</span>
                                        </Link>
                                        <Link
                                            href={'/products/websites/info'}
                                            className="font-h flex items-center justify-between gap-x-4 w-full lg:w-full px-8 py-3 rounded-md bg-themeDark text-themeLight transition-smooth font-medium lg:hover:bg-emerald-400 lg:hover:text-themeDark"
                                        >
                                            <VscRequestChanges size={22} />
                                            <span>
                                                Request To Build Website
                                            </span>
                                        </Link>
                                    </ul>
                                </>
                            }
                            right={
                                <>
                                    <ul className="flex flex-col justify-start gap-y-10">
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        1. Modern & Responsive
                                                        UI/UX Design
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Stop worrying about design
                                                    complexity, I use
                                                    mobile-first-approach to
                                                    make your website responsive
                                                    on mobile, tablet, and
                                                    desktop devices.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Restaurant & Coffee
                                                            Shops
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Clinics & Academies
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Personal Portfolios
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        2. Fully Customizable
                                                        User Interface
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>
                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Because I implement the
                                                    design from scratch without
                                                    using third-party templates,
                                                    your website will be fully
                                                    customizable.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Custom Templates
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Base 4-Pages
                                                            Template
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Base 6-Pages
                                                            Template
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        3. Quickly Deliverable
                                                        Services
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    With a lot of past and
                                                    ongoing project experiences,
                                                    I efficiently distribute my
                                                    time to deliver the initial
                                                    content and maintenance
                                                    services to my clients.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Design &
                                                            Implementation
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Maintenance Services
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Image & Video File
                                                            Management
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        4. Affordable Price
                                                        Rates
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Compared to other marketing
                                                    agencies, I offer price
                                                    rates based on exactly what
                                                    features you need. You will
                                                    only be charged for the
                                                    features you need.
                                                </p>
                                                <ul className="flex flex-col items-center gap-y-4">
                                                    <p className="font-h flex items-center gap-x-4">
                                                        <span className="flex items-center gap-x-2">
                                                            <span className="text-lg lg:text-xl">
                                                                Price Starts
                                                                From
                                                            </span>
                                                            <span className="text-xl lg:text-2xl font-bold px-3 py-1.5 rounded-md bg-themeLight text-themeDark">
                                                                $975.00
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth text-emerald-400 underline">
                                                        View All Pricing &
                                                        Deliverables
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </>
                            }
                        />
                    </WithPadding>
                </WithScreen>
                <WithScreen
                    screen="min-screen"
                    justify="start"
                    className="bg-themeDarkLight text-themeLight relative"
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
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        1. Modern & Responsive
                                                        UI/UX Design
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Stop worrying about design
                                                    complexity, I use
                                                    mobile-first-approach to
                                                    make your website responsive
                                                    on mobile, tablet, and
                                                    desktop devices.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Restaurant & Coffee
                                                            Shops
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Clinics & Academies
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Personal Portfolios
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        2. Fully Customizable
                                                        User Interface
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>
                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Because I implement the
                                                    design from scratch without
                                                    using third-party templates,
                                                    your website will be fully
                                                    customizable.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Custom Templates
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Base 4-Pages
                                                            Template
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Base 6-Pages
                                                            Template
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        3. Quickly Deliverable
                                                        Services
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    With a lot of past and
                                                    ongoing project experiences,
                                                    I efficiently distribute my
                                                    time to deliver the initial
                                                    content and maintenance
                                                    services to my clients.
                                                </p>
                                                <ul className="flex flex-col gap-y-4">
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Design &
                                                            Implementation
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Maintenance Services
                                                        </span>
                                                    </button>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400">
                                                        <HiArrowRight className="text-xl" />
                                                        <span>
                                                            Image & Video File
                                                            Management
                                                        </span>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br bg-transparent">
                                            <div className="w-full h-full">
                                                <div className="flex justify-between items-start lg:items-center mb-3">
                                                    <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                                        4. Affordable Price
                                                        Rates
                                                    </h4>
                                                    <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                        <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                                                    </ul>
                                                </div>

                                                <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7 mb-6">
                                                    Compared to other marketing
                                                    agencies, I offer price
                                                    rates based on exactly what
                                                    features you need. You will
                                                    only be charged for the
                                                    features you need.
                                                </p>
                                                <ul className="flex flex-col items-center gap-y-4">
                                                    <p className="font-h flex items-center gap-x-4">
                                                        <span className="flex items-center gap-x-2">
                                                            <span className="text-lg lg:text-xl">
                                                                Price Starts
                                                                From
                                                            </span>
                                                            <span className="text-xl lg:text-2xl font-bold px-3 py-1.5 rounded-md bg-themeLight text-themeDark">
                                                                $975.00
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <button className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth text-emerald-400 underline">
                                                        View All Pricing &
                                                        Deliverables
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </>
                            }
                        />
                    </WithPadding>
                </WithScreen>
            </Slider>
        </>
    )
}

ProductsPage.getLayout = (page) => <Primary>{page}</Primary>
export default ProductsPage
