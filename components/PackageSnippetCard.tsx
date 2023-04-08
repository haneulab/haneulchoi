import { classnames } from '@studio/utils/classnames'
import type { Package } from 'studio'

import { SiMdnwebdocs } from 'react-icons/si'
import { SlSocialGithub } from 'react-icons/sl'

type IPackageSnippetCard = Package

const PackageSnippetCard = (props: IPackageSnippetCard) => {
    return (
        <div className="grid grid-cols-1 gap-8 relative transition-all transform lg:hover:scale-105">
            <picture
                className={classnames(
                    'w-full absolute -top-10 md:-top-14 left-8 z-10 rounded-full max-w-[75px] h-max mx-auto p-2 md:max-w-[100px] md:p-4 border-2 shadow-md overflow-hidden block drop-shadow-md bg-white/95 backdrop-blur-sm',
                    props.type === 'NodeJS'
                        ? 'shadow-green-400/10 border-green-200'
                        : 'shadow-blue-400/10 border-blue-200'
                )}
            >
                <img src={`${props.image}`} alt={`${props.name} Logo`} />
            </picture>
            <section
                className={classnames(
                    'px-8 pb-8 pt-14 relative border z-0 rounded-xl shadow-md',
                    props.type === 'NodeJS'
                        ? 'border-green-400 '
                        : 'border-blue-400'
                )}
            >
                <h4 className="font-semibold w-max mx-auto md:w-full font-figtree text-xl lg:text-2xl">
                    {props.name}
                </h4>
                <code
                    className={classnames(
                        'w-max mx-auto block md:mx-0 font-source font-semibold lg:text-lg mb-4',
                        props.type === 'NodeJS'
                            ? 'text-green-400'
                            : 'text-blue-400'
                    )}
                >
                    {props.type} Package
                </code>

                <ul className="flex flex-col gap-y-4 items-center md:items-start">
                    <a
                        href={props.url.code}
                        className={classnames(
                            'flex item-center gap-x-2 transition-smooth',
                            props.type === 'NodeJS'
                                ? 'lg:hover:text-green-400'
                                : 'lg:hover:text-blue-400'
                        )}
                    >
                        <SlSocialGithub className="text-2xl" />
                        <span className="font-bold font-source">
                            Source Code
                        </span>
                    </a>
                    <a
                        href={props.url.docs}
                        className={classnames(
                            'flex item-center gap-x-2 transition-smooth',
                            props.type === 'NodeJS'
                                ? 'lg:hover:text-green-400'
                                : 'lg:hover:text-blue-400'
                        )}
                    >
                        <SiMdnwebdocs className="text-2xl" />
                        <span className="font-bold font-source">See Docs</span>
                    </a>
                </ul>
            </section>
        </div>
    )
}

export default PackageSnippetCard
