import type { Page } from 'haneulchoistudio'
import { helper } from '@helpers'
import dynamic from 'next/dynamic'

// Layer
const Primary = dynamic(() => import('@shared-components/layers/Primary'))
const Header = dynamic(() => import('@shared-components/layers/Header'))
const Footer = dynamic(() => import('@shared-components/layers/Footer'))
const Main = dynamic(() => import('@shared-components/layers/Main'))

const IndexPage: Page = () => {
    return (
        <>
            <Primary>
                <div
                    className={helper.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between'
                    )}
                >
                    <Header />
                    <Main>
                        <section className="w-full max-w-cutoff mx-auto px-8 2xl:px-0">
                            <article className="flex flex-col items-center">
                                <h2 className="text-center text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-h font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-600 mb-4">
                                    Build Your Idea.
                                </h2>
                                <p className="text-center leading-7 lg:leading-8 2xl:leading-9 text-lg lg:text-xl 2xl:text-2xl mb-8">
                                    From a simple landing page to a complex web
                                    applications.
                                </p>
                                <ul className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6 max-w-md mx-auto">
                                    <button className="w-full px-8 py-3 rounded-md border ring ring-black text-xl lg:text-2xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-orange-500 lg:hover:text-orange-500 lg:hover:border-orange-500">
                                        Our Products
                                    </button>
                                    <button className="w-full px-8 py-3 rounded-md border ring ring-black text-xl lg:text-2xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-fuchsia-600 lg:hover:text-fuchsia-500 lg:hover:border-fuchsia-600">
                                        Our Portfolio
                                    </button>
                                </ul>
                            </article>
                        </section>
                    </Main>
                    <Footer />
                </div>
            </Primary>
        </>
    )
}

IndexPage.getLayout = (page) => page
export default IndexPage
