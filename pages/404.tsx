/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'
import Head from 'next/head'
import { UIUtility } from '@studio/utils'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))

const NotFound: StudioPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | Haneul Choi Studio</title>
            </Head>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <PageHero
                        title="Page Not Found"
                        description="The page you requested is not found!"
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

NotFound.getLayout = (page) => {
    return <>{page}</>
}

export default NotFound
