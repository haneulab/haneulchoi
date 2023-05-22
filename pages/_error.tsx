/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import type { Page } from 'haneulchoistudio'
import Head from 'next/head'
import { helper } from '@helpers'
import { NextPageContext } from 'next'

const Primary = dynamic(() => import('@shared-components/layers/Primary'))
const Footer = dynamic(() => import('@shared-components/layers/Footer'))

const ErrorPage: Page = () => {
    return (
        <>
            <Head>
                <title>Page Error | Haneul Choi Studio</title>
            </Head>
            <Primary>
                <div
                    className={helper.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <Footer />
                </div>
            </Primary>
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
