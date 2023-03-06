import {
    type IProject,
    type ProjectType,
    type PageWithLayout,
} from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useLanguage, useTheme } from '@haneulchoi/contexts'
import { useEffect, useState } from 'react'
import { Projects } from '@haneulchoi/data'
import { classnames } from '@haneulchoi/functions'

const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { query } = ctx

    console.log(query)
    return {
        props: {
            view: query.view ? query.view : ('web' as ProjectType),
        },
    }
}

const DeveloperHomePage: PageWithLayout<{ view: ProjectType }> = ({ view }) => {
    const { theme } = useTheme()
    const { lang } = useLanguage()

    const [projects, setProjects] = useState<IProject[]>(
        Projects.filter((project) => project.type === view)
    )

    function onSetProjectsByView() {
        setProjects(Projects.filter((project) => project.type === view))
    }

    useEffect(() => {
        onSetProjectsByView()
    }, [view])

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <section className="px-8 py-32 lg:py-36 max-w-cutoff mx-auto w-full">
                <article className="flex flex-col gap-y-8">
                    <p
                        className={classnames(
                            'w-full leading-7 text-start lg:text-center py-2 drop-shadow-sm border-l-4 lg:border-l-8 px-4',
                            theme === 'dark'
                                ? 'bg-neutral-800'
                                : 'bg-neutral-200',
                            projects.length
                                ? 'border-blue-500'
                                : 'border-red-500'
                        )}
                    >
                        {projects.length === 0 ? (
                            <>
                                {lang === 'en'
                                    ? `No project for '${view}' is not listed as of now.`
                                    : `${view} 프로젝트는 현재 리스트에 없습니다.`}
                            </>
                        ) : (
                            <>
                                {lang === 'en'
                                    ? `${projects.length} ${view} ${
                                          projects.length === 1
                                              ? 'project is'
                                              : 'projects are'
                                      } found.`
                                    : `${projects.length}개의 ${view} 프로젝트가 보여집니다.`}
                            </>
                        )}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Projects.filter(
                            (project) => project.type === view
                        ).map((project, idx) => (
                            <div key={idx} className="p-6 border w-full">
                                <h4 className="font-medium text-lg lg:text-xl font-poppins mb-1">
                                    {project.title[lang]}
                                </h4>
                                <p className="text-sm font-light font-lato opacity-75 mb-3">
                                    {project.technologies.join(', ')}
                                </p>
                                <p className="leading-7 font-nunito mb-6">
                                    {project.description[lang]}
                                </p>
                                <div className="w-full flex flex-col gap-y-3">
                                    {project.urls.demo && (
                                        <a
                                            className={classnames(
                                                'block items-center justify-between text-center px-6 py-3 transition-smooth lg:hover:opacity-75 font-poppins font-medium cursor-pointer',
                                                theme === 'dark'
                                                    ? 'bg-neutral-800'
                                                    : 'bg-neutral-200'
                                            )}
                                            href={project.urls.demo}
                                        >
                                            {lang === 'en'
                                                ? 'Live View'
                                                : '웹사이트 보기'}
                                        </a>
                                    )}
                                    {project.urls.demo && (
                                        <a
                                            className={classnames(
                                                'block items-center justify-between text-center px-6 py-3 transition-smooth lg:hover:opacity-75 font-poppins font-medium cursor-pointer',
                                                theme === 'dark'
                                                    ? 'bg-neutral-800'
                                                    : 'bg-neutral-200'
                                            )}
                                            href={project.urls.repository}
                                        >
                                            {lang === 'en'
                                                ? 'Source Code'
                                                : '소스코드 보기'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </ul>
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
