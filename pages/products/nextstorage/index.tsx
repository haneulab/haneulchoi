import type { StudioPage } from 'studio'
import { UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const NextStorageMap = dynamic(
    () => import('@studio/components/containers/products/NextStorageMap')
)

interface PageProps {
    _id: string
}

const NextReportPage: StudioPage = (_props: PageProps) => {
    return (
        <>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <Header variant="dark" />
                    <NextStorageMap />
                    <Footer variant="dark" />
                </div>
            </PrimaryLayer>
        </>
    )
}

NextReportPage.getLayout = (page) => page
export default NextReportPage
