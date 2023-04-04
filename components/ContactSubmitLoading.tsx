interface IContactSubmitLoading {
    message?: string
}

const ContactSubmitLoading = (props: IContactSubmitLoading) => {
    return (
        <aside className="fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-sm h-screen flex flex-col justify-center items-center">
            <section className="px-6 py-16 w-full max-w-[1280px] mx-auto">
                <article className="w-full max-w-lg mx-auto flex flex-col bg-white shadow-md shadow-gray-600/40 p-8 rounded-md justify-center items-center gap-y-4">
                    <span className="w-[50px] h-[50px] animate-spin mx-auto bg-teal-500 rounded-full flex justify-center items-center overflow-hidden relative">
                        <span className="absolute top-0 left-0 w-[200px] h-[20px] bg-white" />
                        <span className="w-4/5 h-4/5 rounded-full block bg-white" />
                    </span>
                    <p className="font-medium text-teal-500 text-center font-komain">
                        {props.message}
                    </p>
                </article>
            </section>
        </aside>
    )
}
export default ContactSubmitLoading
