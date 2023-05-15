import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'
import UIUtility from 'utils/ui'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
const PortfolioDemoMap = dynamic(
    () => import('@studio/components/containers/portfolio/PortfolioDemoMap')
)
const WebAppDemoMap = dynamic(
    () => import('@studio/components/containers/portfolio/WebAppDemoMap')
)
const WebManagerMap = dynamic(
    () => import('@studio/components/containers/portfolio/WebManagerMap')
)
// Link
const HashDirect = dynamic(() => import('@studio/components/links/HashDriect'))

interface PageProps {
    _id?: string
}

const PortfolioPage: StudioPage = (_props: PageProps) => {
    return (
        <PrimaryLayer>
            <div
                className={UIUtility.classnames(
                    'w-full min-h-screen flex flex-col items-center justify-between bg-transparent text-themeLight'
                )}
            >
                <Header variant="dark" />
                <PageHero
                    gradient
                    background="dark"
                    title="Experience Products"
                    description="Explore my demo portfolio products that may match
                    with your interest before working with me."
                >
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4 items-center max-w-2xl">
                        <HashDirect
                            gradient
                            variant="dark"
                            to="demo_portfolio"
                            text="Portfolio Demo"
                        />
                        <HashDirect
                            gradient
                            variant="dark"
                            to="demo_webapp"
                            text="Web App Demo"
                        />
                        <HashDirect
                            gradient
                            variant="dark"
                            to="demo_webmanager"
                            text="Web Manager Demo"
                        />
                    </ul>
                </PageHero>
                <PortfolioDemoMap />
                <WebAppDemoMap />
                <WebManagerMap />
                <Footer variant="dark" />
            </div>
        </PrimaryLayer>
    )
}

PortfolioPage.getLayout = (page) => page
export default PortfolioPage
