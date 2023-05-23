interface ICatchyTitle {
    title: string
}

const CatchyTitle = ({ title }: ICatchyTitle) => {
    return (
        <h2 className="text-center text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-h font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            {title}
        </h2>
    )
}

export default CatchyTitle
