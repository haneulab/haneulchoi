interface IFooterCopyRight {
    year: number
}

const FooterCopyRight = (props: IFooterCopyRight) => {
    return (
        <p className="font-p text-sm text-themeDarkLight/75">
            {props.year} &copy;. All rights reserved.
        </p>
    )
}

export default FooterCopyRight
