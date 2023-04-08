import Image from 'next/image'
import type { Project } from 'studio'

import { SlSocialGithub, SlEye } from 'react-icons/sl'
import { classnames } from '@studio/utils/classnames'
import { useTheme } from '@studio/hooks/useTheme'

type IProjectSnippetCard = Project

const ProjectSnippetcard = (props: IProjectSnippetCard) => {
    const { theme } = useTheme()

    return (
        <div
            className={`block relative overflow-hidden rounded-2xl border ${
                theme === 'dark' ? 'border-grayDark' : 'border-normalDark'
            } transition-smooth lg:hover:border-orangeRed`}
        >
            <picture className="block z-10 transition-smooth relative rounded-2xl overflow-hidden transform lg:hover:scale-110">
                <Image
                    width={500}
                    height={500}
                    src={`${props.image}`}
                    alt={`${props.name} Logo`}
                    className={classnames('relative z-0 transition-smooth')}
                />
            </picture>
            <div
                className={classnames(
                    'absolute bottom-0 z-20 w-full px-4 py-4 left-0 rounded-t-2xl shadow-md backdrop-blur-sm',
                    theme === 'dark'
                        ? 'bg-normalDark/90 text-white'
                        : 'bg-white text-grayDark'
                )}
            >
                <h3 className="font-bold font-figtree text-2xl mb-1 w-max mx-auto">
                    {props.name}
                </h3>
                <p className="mb-2 text-center opacity-70">{props.slug}</p>
                <ul className="flex flex-col gap-y-2 items-center w-full">
                    <a
                        href={props.url.code}
                        className={classnames(
                            'flex item-center gap-x-2 transition-smooth lg:hover:text-orangeRed'
                        )}
                    >
                        <SlEye className="text-2xl" />
                        <span className="font-bold font-source">See Demo</span>
                    </a>
                    <a
                        href={props.url.code}
                        className={classnames(
                            'flex item-center gap-x-2 transition-smooth lg:hover:text-orangeRed'
                        )}
                    >
                        <SlSocialGithub className="text-2xl" />
                        <span className="font-bold font-source">
                            Source Code
                        </span>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default ProjectSnippetcard
