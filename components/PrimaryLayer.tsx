import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Head = dynamic(() => import('next/head'))
const HeaderLayer = dynamic(() => import('@studio/components/HeaderLayer'))
const FooterLayer = dynamic(() => import('@studio/components/FooterLayer'))

interface IPrimaryLayer {
    children: React.ReactNode
    announcementComponent?: React.ReactNode
}

const PrimaryLayer = (props: IPrimaryLayer) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content={[
                        'Haneul Choi',
                        'HaneulChoi',
                        'Software Developer',
                        'Web Developer',
                        'Freelancing Software Developer',
                        'TypeScript',
                        'React',
                        'NextJs',
                        'TailwindCSS',
                        'Github',
                        'Git',
                        'Vercel',
                        'Software',
                    ].join(', ')}
                />
                <meta
                    property="og:description"
                    content="Hi, I am Haneul Choi, a freelancing software developer based in Davis, California. I build web applications & software packages. I love cooking & taking pictures of beautiful nature!"
                />
                <meta property="og:image" content="/og_logo.png" />

                <meta
                    property="og:title"
                    content="Haneul Choi | Studio - @haneulchoistudio"
                />

                <meta
                    name="description"
                    content="Hi, I am Haneul Choi, a freelancing software developer based in Davis, California. I build web applications & software packages. I love cooking & taking pictures of beautiful nature!"
                />

                <title>
                    Haneul Choi | Studio -{' '}
                    {router.pathname !== '/'
                        ? `${router.pathname.replace('/', '')}`
                        : '@haneulchoistudio'}
                </title>
            </Head>
            {props.announcementComponent && props.announcementComponent}
            <HeaderLayer />
            {props.children}
            <FooterLayer />
        </>
    )
}

export default PrimaryLayer
