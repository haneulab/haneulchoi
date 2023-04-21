/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import { edge } from '@studio/middlewares/vercel/edge'
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'
import { TbCodeDots } from 'react-icons/tb'
import { VscFileCode } from 'react-icons/vsc'
import { SiBloglovin } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'

/**
 * @brief
 * --- DYNAMIC IMPORTS STATEMENTS ----
 */
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
const Nav = dynamic(() => import('@studio/components/navs/Nav'))

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Index: StudioPage = () => {
    return (
        <>
            <HeaderLayer />
            <PageParent className="justify-center items-center relative">
                <article className="flex flex-col gap-y-2">
                    <h2 className="font-h font-bold text-7xl lg:text-8xl text-center">
                        Welcome To
                    </h2>
                    <p className="font-h text-2xl lg:text-4xl w-max mx-auto font-light text-themeLightDark">
                        Haneul Choi Studio
                    </p>
                </article>
            </PageParent>
            <Nav
                items={[
                    {
                        href: '/projects',
                        text: 'Projects',
                        icon: <TbCodeDots size={22} />,
                    },
                    {
                        href: '/packages',
                        text: 'Packages',
                        icon: <VscFileCode size={22} />,
                    },
                    {
                        href: '/blogs',
                        text: 'Blogs',
                        icon: <SiBloglovin size={22} />,
                    },
                    {
                        href: '/contact',
                        text: 'Contact',
                        icon: <TfiEmail size={22} />,
                    },
                ]}
            />
            <FooterLayer />
        </>
    )
}

Index.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

// export const getServerSideProps: StudioSSRProps = async (
//     _context: StudioSSRContext
// ) => {
//     const data: PageProps = {
//         projects: [],
//         packages: [],
//         blogs: [],
//     }

//     await Promise.all(
//         Object.keys(data).map(async (key) => {
//             data[key] = await edge(key as unknown as never)()
//             console.log(
//                 `\n\t[VercelEdgeConfig] Data <${key}> Succesfully Fetched At Route ["/"].\n`
//             )
//         })
//     )

//     return {
//         props: data,
//     }
// }

export default Index
