import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useLanguage } from '@haneulchoi/contexts'
import Link from 'next/link'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const DeveloperHomePage: PageWithLayout = () => {
    const { lang } = useLanguage()

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="px-8 py-24 lg:py-28 max-w-cutoff mx-auto w-full">
                <article>
                    <p className="text-center font-lato font-medium mb-4">
                        {lang === 'en'
                            ? 'This page is in construction at this time. Please visit again.'
                            : '현재 이 페이지는 준비중입니다. 다음에 다시 방문해주세요.'}
                    </p>
                    <Link href={'/'}>
                        <a className="block mx-auto w-max text-slate-500 transition-all hover:text-sky-500">
                            {lang === 'en' ? 'Back to home' : '홈으로 가기'}
                        </a>
                    </Link>
                </article>
            </section>
        </div>
    )
}

DeveloperHomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default DeveloperHomePage
