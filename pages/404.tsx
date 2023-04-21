import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'
import NotFoundImage from 'public/404.png'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))
const Head = dynamic(() => import('next/head'))
const FooterLayer = dynamic(
    () => import('@studio/components/layers/FooterLayer')
)

const NotFound: StudioPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found - @haneulchoistudio</title>
            </Head>
            <div className="h-screen flex flex-col justify-center items-center">
                <section className="w-full max-w-cutoff mx-auto px-6 lg:px-0 py-16">
                    <picture className="w-full block max-w-[275px] mx-auto">
                        <Image
                            src={NotFoundImage}
                            alt="Haneul Choi Studio | Page Not Found"
                        />
                    </picture>
                    <h3 className="text-center font-bold font-figtree text-xl md:text-2xl lg:text-3xl mb-4">
                        404 | Page Not Found
                    </h3>
                    <Link
                        href={'/'}
                        className="block w-max mx-auto text-normalRed font-medium font-source text-lg lg:text-xl transition-all lg:hover:opacity-70"
                    >
                        Back Home
                    </Link>
                </section>
            </div>
            <FooterLayer />
        </>
    )
}

NotFound.getLayout = (page) => {
    return <>{page}</>
}

export default NotFound
