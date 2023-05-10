/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import Head from 'next/head'

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface IPrimary {
    children: React.ReactNode
    announcementComponent?: React.ReactNode
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Primary = (props: IPrimary) => {
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
            {props.children}
        </>
    )
}

export default Primary
