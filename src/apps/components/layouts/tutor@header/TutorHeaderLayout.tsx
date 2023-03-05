import { type AppRFC } from '@haneulchoi/types'

import { useLanguage, useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import Link from 'next/link'
import { LanguageButton, ThemeButton } from '@application/components/core'

import { MdOutlineScreenshotMonitor, MdCode } from 'react-icons/md'
import { TbPackageExport } from 'react-icons/tb'
import { HiArrowLeft } from 'react-icons/hi'

const TutorHeaderLayout: AppRFC = () => {
    const { theme } = useTheme()
    const { lang } = useLanguage()

    return (
        <header className="transition-smooth fixed top-0 z-40 w-full backdrop-blur-sm">
            <div
                className={classnames(
                    theme === 'dark'
                        ? 'bg-neutral-900/90 text-white'
                        : 'bg-white/90 text-neutral-900'
                )}
            >
                <section className="p-4 w-full max-w-cutoff mx-auto flex justify-between items-center">
                    <h1 className="flex items-center">
                        <Link href={'/tutor/home'}>
                            <a className="font-light font-mono italic text-base lg:text-lg transition-all hover:opacity-75">
                                HC.Studio.Tutor
                            </a>
                        </Link>
                    </h1>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <ThemeButton />
                        <LanguageButton />
                    </div>
                </section>
            </div>
            <div
                className={classnames(
                    theme === 'dark'
                        ? 'bg-neutral-800/50 text-white'
                        : 'bg-neutral-100/50 text-neutral-900'
                )}
            >
                <section className="px-4 py-2 w-full max-w-cutoff mx-auto flex justify-between items-center">
                    <ul className="flex justify-start items-center gap-x-4">
                        <button
                            className="inline-flex items-center gap-x-2 text-xs lg:text-sm font-nunito opacity-75 lg:hover:opacity-100 transition-smooth
                        "
                        >
                            {' '}
                            <MdOutlineScreenshotMonitor className="text-lg lg:text-xl" />
                            <span>
                                {lang === 'en' ? 'Mathematics' : '수학'}
                            </span>
                        </button>
                        <button
                            className="inline-flex items-center gap-x-2 text-xs lg:text-sm font-nunito opacity-75 lg:hover:opacity-100 transition-smooth
                        "
                        >
                            {' '}
                            <MdCode className="text-lg lg:text-xl" />
                            <span>
                                {lang === 'en' ? 'Computer Science' : '컴퓨터 과학'}
                            </span>
                        </button>
                    </ul>
                    <div>
                        <Link href={'/'}>
                            <a className="inline-flex items-center gap-x-1 text-xs lg:text-sm transition-smooth lg:hover:opacity-75 text-red-500">
                                <HiArrowLeft />
                                <span>{lang === "en" ? "Back to studio" : "돌아가기"}</span>
                            </a>
                        </Link>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default TutorHeaderLayout
