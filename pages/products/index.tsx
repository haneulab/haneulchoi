import type { StudioPage } from 'studio'
import { UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'
import { TbUsers, TbQrcode, TbSettingsAutomation } from 'react-icons/tb'
import { ProductUtility } from '@studio/utils'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
const ProductMap = dynamic(
    () => import('@studio/components/containers/ProductMap')
)

interface PageProps {
    _id: string
}

const ProductsPage: StudioPage = (_props: PageProps) => {
    const productsIcons: {
        [K in keyof typeof ProductUtility.products]: React.ReactNode
    } = {
        'Portfolio Website': <TbUsers size={22} />,
        'Web Application': <TbQrcode size={22} />,
        'Digital Manager System': <TbSettingsAutomation size={22} />,
    }
    const products = Object.keys(ProductUtility.products)

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
                        background="light"
                        title="Explore Products"
                        description="From a simple website to a more sophiscated full-stack web application"
                        links={[
                            {
                                href: '/portfolio',
                                text: 'Portfolio',
                            },
                            {
                                href: '/services',
                                text: 'Services',
                            },
                        ]}
                    />
                    {products.map((product, idx) => (
                        <ProductMap
                            key={idx}
                            {...ProductUtility.products[product]}
                            relevantRoute={{
                                ...ProductUtility.products[product]
                                    .relevantRoute,
                                icon: productsIcons[product],
                            }}
                            background={idx % 2 === 0 ? 'light' : 'dark'}
                        />
                    ))}

                    <Footer />
                </div>
            </PrimaryLayer>
        </>
    )
}

ProductsPage.getLayout = (page) => page
export default ProductsPage
