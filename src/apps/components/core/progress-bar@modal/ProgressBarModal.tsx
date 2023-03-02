import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { type AppRFC } from '@haneulchoi/types'
import { type IProgressBarModal } from './ProgressBarModal.types'

const ProgressBarModal: AppRFC<IProgressBarModal> = ({
    show,
    message,
    icon,
}) => {
    const { theme } = useTheme()
    return (
        show && (
            <div
                className={classnames(
                    'w-full fixed top-0 z-50 flex flex-col justify-center items-center h-screen transition-smooth backdrop-blur-sm',
                    theme === 'dark' ? 'bg-neutral-900/80' : 'bg-white/80'
                )}
            >
                <section className="w-full px-8 py-24 lg:py-28 max-w-cutoff mx-auto">
                    <article className="flex flex-col items-center gap-y-4">
                        {icon && icon}
                        <p className="px-8 font-nunito text-sm text-emerald-500">
                            {message}
                        </p>
                    </article>
                </section>
            </div>
        )
    )
}

export default ProgressBarModal
