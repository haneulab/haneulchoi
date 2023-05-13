interface IViewerAccess {
    viewerCode: string
    approvalId?: string

    doesNotMatch?: boolean

    onMatch?: () => void

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onReset: () => void
}

const ViewerAccess = ({
    viewerCode,
    approvalId,
    onChange,
    onReset,
    onMatch = null,
}: IViewerAccess) => {
    return !approvalId ? (
        <div className="lg:p-8 lg:rounded-md lg:border w-full max-w-lg mx-auto lg:border-pink-500/25 lg:bg-pink-500/5">
            <div className="flex justify-between items-center gap-x-4 mb-4">
                <label className="font-bold text-pink-500 text-lg font-h block">
                    Access Code
                </label>
                {viewerCode && (
                    <button
                        onClick={onReset}
                        className="font-medium font-h lg:text-sm bg-pink-500 text-themeLight rounded-full lg:px-3 lg:py-1.5 px-3 py-1 text-xs transition-smooth lg:hover:bg-themeDark lg:hover:text-pink-500"
                    >
                        Reset
                    </button>
                )}
            </div>
            <input
                type="text"
                value={viewerCode}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()

                        if (viewerCode.length <= 4) {
                            alert(
                                'Too short, the access code should be longer than or equal to 4 characters.'
                            )

                            return
                        }

                        onMatch()
                        return
                    }
                }}
                className="w-full rounded-md lg:border-pink-500/10 font-h placeholder:text-themeLightDark/50"
                placeholder="Please enter the access code."
            />
            {viewerCode.length >= 4 && (
                <button
                    onClick={onMatch}
                    className="block px-8 py-3 font-medium bg-themeDark text-pink-500 w-full rounded-md font-h mt-6 transition-smooth lg:hover:bg-pink-500 lg:hover:text-themeLight"
                >
                    Access The Content
                </button>
            )}
        </div>
    ) : (
        <div className="">
            <video
                src={'/videos/ucd_memories.mp4'}
                controls
                className="w-full max-w-lg mx-auto overflow-hidden ring-none outline-none focus:outline-none focus:ring-none focus:border-none rounded-xl shadow-xl shadow-themeDark/10 transition-smooth transform lg:hover:scale-105 lg:hover:shadow-themeDark/20"
            />
        </div>
    )
}

export default ViewerAccess
