import dynamic from 'next/dynamic'

const ProductDirect = dynamic(
    () => import('@studio/components/links/ProductDirect')
)

const WebManagerMap = () => {
    return (
        <div
            id="demo_webmanager"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-themeDark"
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-2xl mx-auto">
                <article>
                    <h3
                        style={{
                            lineHeight: '1.2',
                        }}
                        className="font-bold text-3xl lg:text-4xl 2xl:text-5xl font-h mb-4 lg:mb-6 text-center"
                    >
                        Web Manager System
                    </h3>
                    <p
                        style={{
                            lineHeight: '1.6',
                        }}
                        className="font-h font-light opacity-75 text-lg lg:text-xl 2xl:text-2xl text-center mb-8 lg:mb-10 2xl:mb-12"
                    >
                        Made easy & user-friendly for businesses to keep track
                        of data and make reports.
                    </p>
                    <div className="flex flex-col gap-y-4 w-full items-center max-w-lg mx-auto mb-6 2xl:mb-8">
                        <ProductDirect
                            name="NextReport"
                            href="/products/nextreport"
                        />
                        <ProductDirect
                            name="NextStorage"
                            href="/products/nextstorage"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="font-h text-pink-50 font-light text-sm lg:text-base">
                            Read About{' '}
                            <span className="font-medium cursor-pointer transition-smooth lg:hover:text-pink-600">
                                NextReport
                            </span>{' '}
                            and{' '}
                            <span className="font-medium cursor-pointer transition-smooth lg:hover:text-pink-600">
                                NextStorage
                            </span>
                            .
                        </button>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default WebManagerMap
