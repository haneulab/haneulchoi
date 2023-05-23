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
import Link from 'next/link'

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
                    className="bg-themeDarkLight text-themeLight"
                >
                    <WithPadding>
                        <WihtColumn align="center">
                            <h3 className="font-h text-3xl flex items-center gap-x-4 divide-x divide-red-500 mb-3 text-red-500">
                                <span className="flex items-center gap-x-2">
                                    {helper
                                        .getErrors(statusCode)
                                        .split(' ')
                                        .map((e, idx) => (
                                            <span
                                                className={helper.classnames(
                                                    idx === 0 && '',
                                                    idx === 1 &&
                                                        'animate-bounce',
                                                    idx === 2 &&
                                                        'animate-bounce'
                                                )}
                                                key={idx}
                                            >
                                                {e}
                                            </span>
                                        ))}
                                </span>
                                <span className="pl-3 text-red-500">
                                    {statusCode}
                                </span>
                            </h3>
                            <p className="font-h font-light text-lg lg:text-xl leading-7 lg:leading-9 text-center mb-6">
                                There was an error occured while requesting the
                                page.
                            </p>
                            <Link
                                href={'/'}
                                className="w-full text-lg max-w-sm mx-auto font-h text-center block px-8 py-3 rounded-md bg-emerald-400/5 border border-emerald-400/25 text-emerald-400 lg:hover:text-cyan-400 lg:hover:border-cyan-400"
                            >
                                Back To Main Page
                            </Link>
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
