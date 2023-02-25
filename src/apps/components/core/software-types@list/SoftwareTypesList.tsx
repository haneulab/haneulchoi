import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { AppRFC } from '@haneulchoi/types'
import { ISoftwareTypesList } from './SoftwareTypesList.types'

const SoftwareTypesList: AppRFC<ISoftwareTypesList> = ({
    currentCardView,
    onChnageCardView,
    views,
}) => {
    const { theme } = useTheme()

    return (
        <ul className="flex flex-col items-center gap-y-4">
            {views.map((view, idx) => (
                <button
                    key={idx}
                    className={classnames(
                        'capitalize font-nunito font-medium text-lg  transition-smooth hover:opacity-80',
                        view === currentCardView
                            ? theme === 'dark'
                                ? 'font-medium text-slate-300'
                                : 'font-medium text-slate-500'
                            : theme === 'dark'
                            ? 'font-medium text-slate-500'
                            : 'font-medium text-slate-400'
                    )}
                    onClick={() => onChnageCardView(view)}
                >
                    {view}
                </button>
            ))}
        </ul>
    )
}

export default SoftwareTypesList
