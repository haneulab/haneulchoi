import dynamic from 'next/dynamic'
import ProductsWebsiteImage from 'public/static/products_websites.png'

const ImageContent = dynamic(
    () => import('@shared-components/containers/ImageContent')
)

const WebsiteProducts = () => {
    return (
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
                <strong className="capitalize">porfolio</strong> or for your{' '}
                <strong className="capitalize">business</strong>{' '}
                <span className="inline-block bg-clip-text font-semibold text-xl lg:text-2xl text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    Start from here.
                </span>
            </p>
        </>
    )
}

export default WebsiteProducts
