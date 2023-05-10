interface IFooterSocialIcon {
    href?: string
    onClick?: () => void
    icon?: React.ReactNode
}

const FooterSocialIcon = (props: IFooterSocialIcon) => {
    return (
        <button
            role="link"
            aria-label="external-social-media-link"
            onClick={props.onClick}
            className="transition-smooth transform lg:hover:scale-125 lg:hover:rotate-12 lg:hover:opacity-75"
        >
            {props.icon}
        </button>
    )
}

export default FooterSocialIcon
