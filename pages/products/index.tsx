import type { StudioPage } from 'studio'
import { UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'
import { TbUsers, TbQrcode, TbSettingsAutomation } from 'react-icons/tb'
import { Products } from '@studio/utils'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
const ProductMap = dynamic(
    () => import('@studio/components/containers/products/ProductMap')
)

interface PageProps {
    _id: string
}

const ProductsPage: StudioPage = (_props: PageProps) => {
    const productsIcons: {
        [K in keyof typeof Products.products]: React.ReactNode
    } = {
        'Personal & Business': <TbUsers size={22} />,
        'Web Applications': <TbQrcode size={22} />,
        cManager: <TbSettingsAutomation size={22} />,
        sReporter: <TbSettingsAutomation size={22} />,
    }
    const products = Object.keys(Products.products)

    return (
        <>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <Header variant="dark" />
                    <PageHero
                        gradient
                        background="dark"
                        title="Explore Products"
                        description="From a simple website to a more sophisticated full-stack web application"
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
                            {...Products.products[product]}
                            directRoute={{
                                ...Products.products[product].directRoute,
                                icon: productsIcons[product],
                            }}
                            background={'dark'}
                        />
                    ))}

                    <Footer variant="dark" />
                </div>
            </PrimaryLayer>
        </>
    )
}

ProductsPage.getLayout = (page) => page
export default ProductsPage
