interface IFooterLinkDirectLoading {
    message: string
}

const FooterLinkDirectLoading = (props: IFooterLinkDirectLoading) => {
    return (
        <p className="font-medium text-sm  lg:text-lg animate-bounce text-blue-500 font-e1">
            {props.message}
        </p>
    )
}

export default FooterLinkDirectLoading
