import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'

const ProfileImage = () => {
    const { theme } = useTheme()
    return (
        <picture
            className={classnames(
                'block max-w-[35px] max-h-[35px] rounded-full  overflow-hidden border-2 transition-all duration-[0.25s]',
                theme === 'dark' ? 'border-grayWhite' : 'border-navyDark'
            )}
        >
            <img src="/profile.svg" alt="Haneul Choi | haneulchoistudio" />
        </picture>
    )
}

export default ProfileImage
