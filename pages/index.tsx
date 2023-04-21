/* eslint-disable @typescript-eslint/no-unused-vars */
import { edge } from '@studio/middlewares/vercel/edge'
import dynamic from 'next/dynamic'
import type {
    Blog,
    Package,
    Project,
    StudioPage,
    StudioSSRContext,
    StudioSSRProps,
} from 'studio'
import { TbCodeDots } from 'react-icons/tb'
import { VscFileCode } from 'react-icons/vsc'
import { SiBloglovin } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'
const HeaderLayer = dynamic(
    () => import('@studio/components/layers/HeaderLayer')
)
const FooterLayer = dynamic(
    () => import('@studio/components/layers/FooterLayer')
)

const PrimaryLayer = dynamic(
    () => import('@studio/components/layers/PrimaryLayer')
)
const PageParent = dynamic(
    () => import('@studio/components/containers/PageParent')
)

interface PageProps {
    projects: Project[]
    packages: Package[]
    blogs: Blog[]
}

const Index: StudioPage<PageProps> = (props: PageProps) => {
    return (
        <>
            <HeaderLayer />
            <PageParent className="justify-center items-center relative">
                <article className="flex flex-col gap-y-4">
                    <h2 className="font-h font-bold text-6xl md:text-7xl lg:text-8xl text-center">
                        Welcome To
                    </h2>
                    <p className="font-p text-xl lg:text-2xl w-max mx-auto font-light text-themeLightDark">
                        Haneul Choi Studio
                    </p>
                </article>
            </PageParent>
            <div className="sticky bottom-0 w-full lg:w-max mx-auto rounded-t-md shdaow bg-themeDarkLight text-themeLight">
                <section className="max-w-cutoff mx-auto flex justify-between sm:justify-center lg:justify-start">
                    <button className="flex flex-col items-center gap-y-1.5 p-6 text-sm lg:text-base transition-smooth lg:hover:opacity-100 opacity-80">
                        <TbCodeDots size={22} />
                        <span className="font-p font-medium">Projects</span>
                    </button>
                    <button className="flex flex-col items-center gap-y-1.5 p-6 text-sm lg:text-base transition-smooth lg:hover:opacity-100 opacity-80">
                        <VscFileCode size={22} />
                        <span className="font-p font-medium">Pacakges</span>
                    </button>
                    <button className="flex flex-col items-center gap-y-1.5 p-6 text-sm lg:text-base transition-smooth lg:hover:opacity-100 opacity-80">
                        <SiBloglovin size={22} />
                        <span className="font-p font-medium">Blogs</span>
                    </button>
                    <button className="flex flex-col items-center gap-y-1.5 p-6 text-sm lg:text-base transition-smooth lg:hover:opacity-100 opacity-75">
                        <TfiEmail size={22} />
                        <span className="font-p font-medium">Contact</span>
                    </button>
                </section>
            </div>
            <FooterLayer />
        </>
    )
}

Index.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

export const getServerSideProps: StudioSSRProps = async (
    _context: StudioSSRContext
) => {
    const data: PageProps = {
        projects: [],
        packages: [],
        blogs: [],
    }

    await Promise.all(
        Object.keys(data).map(async (key) => {
            data[key] = await edge(key as unknown as never)()
            console.log(
                `\n\t[VercelEdgeConfig] Data <${key}> Succesfully Fetched At Route ["/"].\n`
            )
        })
    )

    return {
        props: data,
    }
}

export default Index
