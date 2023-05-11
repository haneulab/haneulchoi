interface IHashDirect {
    to: string
    text: string
}

const HashDirect = ({ to, text }: IHashDirect) => {
    const __href__ = `#${to}`

    return (
        <a
            href={__href__}
            className="font-h px-8 py-3 font-medium bg-themeLight text-themeDark rounded-md border border-themeDark transition-smooth lg:hover:bg-themeDark lg:hover:text-themeLight"
        >
            {text}
        </a>
    )
}

export default HashDirect
