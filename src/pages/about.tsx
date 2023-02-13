import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@haneulchoi/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const AboutPage: PageWithLayout = () => {
    return <></>
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default AboutPage
