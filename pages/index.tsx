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

const PrimaryLayer = dynamic(() => import('@studio/components/PrimaryLayer'))
const IntroSection = dynamic(() => import('@studio/components/IntroSection'))
const ProjectSection = dynamic(
    () => import('@studio/components/ProjectSection')
)
const PackageSection = dynamic(
    () => import('@studio/components/PackageSection')
)
// const BlogSection = dynamic(() => import('@studio/components/BlogSection'))
const ContactSection = dynamic(
    () => import('@studio/components/ContactSection')
)

interface PageProps {
    projects: Project[]
    packages: Package[]
    blogs: Blog[]
}

const Index: StudioPage<PageProps> = (props: PageProps) => {
    return (
        <div className="relative min-h-screen">
            <IntroSection />
        </div>
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
