const WebAppDemoMap = () => {
    return (
        <div
            id="demo_webapp"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-themeDark via-slate-900 to-themeDark"
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-2xl mx-auto">
                <article>
                    <h3
                        style={{
                            lineHeight: '1.2',
                        }}
                        className="font-bold text-3xl lg:text-4xl 2xl:text-5xl font-h mb-4 lg:mb-6 text-center"
                    >
                        Frontend & Backend Web Applications
                    </h3>
                    <p
                        style={{
                            lineHeight: '1.6',
                        }}
                        className="font-h font-light opacity-75 text-lg lg:text-xl 2xl:text-2xl text-center mb-8 lg:mb-10"
                    >
                        Let your idea come to reality.
                    </p>
                    <p className="p-8 bg-pink-500/10 border border-pink-500/25 text-pink-500 font-h lg:text-lg text-center">
                        This section is currently not available.
                    </p>
                </article>
            </section>
        </div>
    )
}

export default WebAppDemoMap
