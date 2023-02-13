import Image from 'next/image'
import BGDesktop from 'public/haneulchoi_background_image_desktop.png'
import BGMobile from 'public/haneulchoi_background_image_mobile.png'

import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { classnames } from '@haneulchoi/functions'
import { useTheme } from '@haneulchoi/contexts'
import { HiArrowRight } from 'react-icons/hi'
import { SiInstagram, SiGithub, SiLinkedin } from 'react-icons/si'
import { type PageWithLayout } from '@haneulchoi/types'
const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    const { theme } = useTheme()

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center relative">
                <picture className="hidden md:block w-full h-full absolute top-0 z-0">
                    <Image
                        src={BGDesktop}
                        alt=""
                        className="opacity-10"
                        width={1920}
                    />
                </picture>
                <picture className="block md:hidden w-full h-full absolute top-0 z-0">
                    <Image
                        src={BGMobile}
                        alt=""
                        className="opacity-10"
                        width={390}
                    />
                </picture>
                <section className="px-8 py-24 lg:py-28 relative z-10">
                    <article className="flex flex-col items-center">
                        <h3 className="font-medium font-poppins text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 lg:mb-6">
                            Do it with passion
                        </h3>
                        <p className="font-nunito font-light text-center text-lg leading-7 lg:text-xl lg:leading-8 2xl:text-2xl 2xl:leading-9">
                            I am a passionate software developer who loves to
                            solve seemlingly impossible problems.
                        </p>
                    </article>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
