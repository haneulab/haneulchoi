interface ICatchyParagraph {
    message: string
}

const CatchyParagraph = ({ message }: ICatchyParagraph) => {
    return (
        <p className="font-h text-center leading-7 lg:leading-8 2xl:leading-9 text-lg lg:text-xl 2xl:text-2xl mb-8">
            {message}
        </p>
    )
}

export default CatchyParagraph
