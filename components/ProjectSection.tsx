import type { Project } from 'studio'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const TechLogo = dynamic(() => import('@studio/components/TechLogo'))

interface IPropjectSection {
    projects: Project[]
}

const ProjectSnippetcard = dynamic(
    () => import('@studio/components/ProjectSnippetCard')
)

const ProjectSection = (props: IPropjectSection) => {
    const [stacks, _] = useState<string[]>(
        props.projects
            .map((project) => project.stacks)
            .filter((value, index, arr) => arr.indexOf(value) === index)
            .join('')
            .split(',')
    )

    return (
        <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1">
            <article className="mb-12 md:mb-16">
                <h3 className="w-full text-center mx-auto font-bold text-3xl md:text-4xl lg:text-5xl font-figtree flex flex-col gap-y-4 lg:gap-y-6 items-center">
                    <AiOutlineFundProjectionScreen className="text-5xl md:text-6xl lg:text-7xl" />
                    <span>My Portfolio</span>
                </h3>
            </article>
            <ul className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto mb-16">
                {props.projects.map((prj, idx) => (
                    <ProjectSnippetcard {...prj} key={idx} />
                ))}
            </ul>
            <article className="flex flex-col gap-y-6 lg:gap-y-10 items-center">
                <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl font-figtree text-transparent bg-gradient-to-r bg-clip-text from-orangeRed to-pinkRed">
                    Projects Powered By Techs
                </h4>
                <ul className="flex items-center gap-x-2 lg:gap-x-4">
                    <span className="w-2 h-2 lg:w-4 lg:h-4 rounded-full block bg-orangeRed animate-pulse" />
                    <span className="w-2 h-2 lg:w-4 lg:h-4 rounded-full block bg-normalRed animate-pulse" />
                    <span className="w-2 h-2 lg:w-4 lg:h-4 rounded-full block bg-pinkRed animate-pulse" />
                </ul>
                <ul className="text-center font-source grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {stacks.map((stack, idx) => (
                        <TechLogo stack={stack} key={idx} />
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default ProjectSection
