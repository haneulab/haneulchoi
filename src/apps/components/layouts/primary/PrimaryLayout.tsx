import { type IPrimaryLayout } from './Primary.types'
import { type AppRFC } from '@haneulchoi/types'
import { FooterLayout } from '../footer'
import { MetaLayout } from '../meta'
import { HeaderLayout } from '../header'
import { DeveloperHeaderLayout } from '../developer@header'
import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { useRoute } from '@haneulchoi/hooks'
import { TutorHeaderLayout } from '../tutor@header'

const PrimaryLayout: AppRFC<IPrimaryLayout> = ({
    children,
    title,
    description,
    keywords,
    render = {
        header: true,
        footer: true,
    },
}) => {
    const { route } = useRoute()
    const { theme } = useTheme()

    return (
        <>
            <MetaLayout
                title={title}
                description={description}
                keywords={keywords}
            />
            {render.header ? (
                route.includes('developer') ? (
                    <DeveloperHeaderLayout />
                ) : route.includes('tutor') ? (
                    <TutorHeaderLayout />
                ) : (
                    <HeaderLayout />
                )
            ) : (
                <HeaderLayout />
            )}
            <main
                className={classnames(
                    'transition-smooth relative',
                    theme === 'dark'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white text-neutral-900'
                )}
            >
                {children}
            </main>
            {render.footer && <FooterLayout />}
        </>
    )
}

export default PrimaryLayout
