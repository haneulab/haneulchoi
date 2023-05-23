/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { ErrorStatusCode, Page } from 'haneulchoistudio'
import { helper } from '@helpers'
import { NextPageContext } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Primary = dynamic(() => import('@shared-components/layers/Primary'))
const Slider = dynamic(() => import('@shared-components/layers/Slider'))
const WithPadding = dynamic(
    () => import('@shared-components/layers/WithPadding')
)
const Header = dynamic(() => import('@shared-components/layers/Header'))
const Footer = dynamic(() => import('@shared-components/layers/Footer'))
const WihtColumn = dynamic(
    () => import('@shared-components/containers/WithColumn')
)
const WithScreen = dynamic(
    () => import('@shared-components/containers/WithScreen')
)

interface PageProps {
    statusCode: ErrorStatusCode
}

const ErrorPage: Page = ({ statusCode }: PageProps) => {
    const router = useRouter()

    useEffect(() => {
        router.replace({
            pathname: `/_error`,
        })
    }, [])

    return (
        <>
            <Head>
                <title>
                    {helper.getErrors(statusCode)} - {statusCode} | Haneul Choi
                    Studio
                </title>
            </Head>
            <Slider header={<Header />} footer={<Footer />}>
                <WithScreen
                    justify="center"
                    className="bg-gradient-to-b from-themeDark via-themeDark to-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center">
                            <h3 className="text-4xl text-pink-500">
                                {helper.getErrors(statusCode)} | {statusCode}
                            </h3>
                        </WihtColumn>
                    </WithPadding>
                </WithScreen>
            </Slider>
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
    return <Primary>{page}</Primary>
}

export default ErrorPage
