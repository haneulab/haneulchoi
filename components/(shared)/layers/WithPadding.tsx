interface IWithPadding {
    children: React.ReactNode
}

const WithPadding = ({ children }: IWithPadding) => {
    return (
        <section className="w-full max-w-cutoff mx-auto px-8 2xl:px-0">
            {children}
        </section>
    )
}

export default WithPadding
