import dynamic from 'next/dynamic'
import Head from 'next/head'

const HeaderLayer = dynamic(() => import('@studio/components/HeaderLayer'))
const FooterLayer = dynamic(() => import('@studio/components/FooterLayer'))

interface IPrimaryLayer {
    children: React.ReactNode
    announcementComponent?: React.ReactNode
}

const PrimaryLayer = (props: IPrimaryLayer) => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content={[
                        'Haneul Choi Studio',
                        'haneulchoistudio',
                        '@haneulchoistudio',
                        'Haneul Choi',
                        'HaneulChoi',
                        'Web Application',
                        'Software Developer',
                        'Web Developer',
                        'Freelancing Software Developer',
                        'Business',
                        'Business Website',
                        'Startups',
                        'Startup Application',
                        'Ecommerce',
                        'E-commerce',
                        'Ecommerce Web Application',
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
                    content="Haneul Choi Studio provides web design, development, and maintenance services for individuals, entrepreneurs, and companies for their business success."
                />
                <meta
                    property="og:image"
                    content="/haneulchoistudio_open_graphic.png"
                />

                <meta
                    property="og:title"
                    content="Haneul Choi Studio | Web Services & Development"
                />

                <meta
                    name="description"
                    content="Haneul Choi Studio provides web design, development, and maintenance services for individuals, entrepreneurs, and companies for their business success."
                />

                <title>Haneul Choi Studio | Web Services & Development</title>
            </Head>
            {props.announcementComponent && props.announcementComponent}
            <HeaderLayer />
            {props.children}
            <FooterLayer />
        </>
    )
}

export default PrimaryLayer
