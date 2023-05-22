interface IMain {
    children: React.ReactNode
}

const Main = ({ children }: IMain) => {
    return (
        <main className="fixed top-0 w-full z-0 min-h-screen flex flex-col justify-center bg-gradient-to-b from-themeDark via-themeDark to-themeDarkLight text-themeLight">
            {children}
        </main>
    )
}

export default Main
