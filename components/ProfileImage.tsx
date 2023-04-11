import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import Image from 'next/image'
import DarkModeLogo from 'public/haneulchoistudio_dark_logo.svg'
import LightModeLogo from 'public/haneulchoistudio_light_logo.svg'

const ProfileImage = () => {
    const { theme } = useTheme()
    return (
        <div className="flex items-center gap-x-2">
            {' '}
            <picture
                className={classnames(
                    'block max-w-[35px] max-h-[35px] transition-all duration-[0.25s]',
                    theme === 'dark' ? 'border-grayWhite' : 'border-navyDark'
                )}
            >
                <Image
                    width={50}
                    height={50}
                    src={theme === 'dark' ? DarkModeLogo : LightModeLogo}
                    alt="Haneul Choi | haneulchoistudio"
                />
            </picture>
            <picture
                className={classnames(
                    'block max-w-[35px] max-h-[35px] rounded-full  overflow-hidden border-1 transition-all duration-[0.25s]',
                    theme === 'dark'
                        ? 'border-themeDarkLight'
                        : 'border-themeLightDark'
                )}
            >
                <Image
                    width={50}
                    height={50}
                    src="/profile.svg"
                    alt="Haneul Choi | haneulchoistudio"
                />
            </picture>
        </div>
    )
}

export default ProfileImage
