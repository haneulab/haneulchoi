import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { SiGithub } from 'react-icons/si'
import { type AppRFC } from '@haneulchoi/types'
import { type ISoftwareProjectCard } from './SoftwareProject.types'

const SoftwareProjectCard: AppRFC<ISoftwareProjectCard> = ({
    name,
    description,
    repo,
    type,
    currentCardView,
}) => {
    const { theme } = useTheme()

    return (
        type === currentCardView && (
            <section
                className={classnames(
                    'lg:border lg:drop-shadow lg:p-6  flex flex-col justify-between gap-y-2 transition-smooth transform hover:scale-[102.5%] cursor-pointer',
                    theme === 'dark'
                        ? 'border-slate-400/30 hover:border-slate-400/50'
                        : 'hover:border-neutral-900/75 lg:border-neutral-900/25 shadow-md shadow-transparent hover:shadow-slate-200/50 '
                )}
            >
                <div className="mb-2">
                    <h4 className="font-medium text-xl font-poppins mb-2 capitalize">
                        {name}
                    </h4>
                    <p>{description}</p>
                </div>
                <div>
                    <a
                        href={repo}
                        className="px-4 py-3 inline-flex justify-center items-center gap-x-2 w-full bg-zinc-500 text-neutral-50 font-lato font-bold text-sm transition-smooth hover:bg-neutral-500/50"
                    >
                        <SiGithub />
                        <span>Repository</span>
                    </a>
                </div>
            </section>
        )
    )
}

export default SoftwareProjectCard
