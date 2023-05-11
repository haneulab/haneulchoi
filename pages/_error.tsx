/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'
import Head from 'next/head'
import { UIUtility } from '@studio/utils'
import { NextPageContext } from 'next'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))

interface PageProps {
    statusCode: string
}

const ErrorPage: StudioPage = (props: PageProps) => {
    return (
        <>
            <Head>
                <title>Error {props.statusCode} | Haneul Choi Studio</title>
            </Head>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <PageHero
                        warning
                        title={`Request Error : ${props.statusCode}`}
                        description="The page you requested resulted in error."
                        links={[
                            {
                                href: '/',
                                text: 'Home',
                            },
                            {
                                href: '/about',
                                text: 'About',
                            },
                        ]}
                    />

                    <Footer />
                </div>
            </PrimaryLayer>
        </>
    )
}

ErrorPage.getInitialProps = (context: NextPageContext) => {
    const { res, err } = context
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return {
        statusCode,
    }
}

ErrorPage.getLayout = (page) => {
    return <>{page}</>
}

export default ErrorPage
