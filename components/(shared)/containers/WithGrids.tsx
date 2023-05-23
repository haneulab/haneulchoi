import { helper } from '@helpers'
import dynamic from 'next/dynamic'

interface IWithGrids {
    slideColumn: 'right' | 'left'
    className?: string
    left: React.ReactNode
    right: React.ReactNode
}

const WithGrids = ({ left, right, slideColumn = 'right' }: IWithGrids) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full h-full">
            <article
                className={helper.classnames(
                    slideColumn === 'left' && 'lg:col-span-5',
                    slideColumn === 'right' && 'lg:col-span-7'
                )}
            >
                <div
                    className={helper.classnames(
                        slideColumn === 'left' && 'relative lg:top-20 lg:sticky'
                    )}
                >
                    {left}
                </div>
            </article>
            <article
                className={helper.classnames(
                    slideColumn === 'left' && 'lg:col-span-7',
                    slideColumn === 'right' &&
                        'lg:col-span-5 row-start-1 lg:row-auto'
                )}
            >
                <div
                    className={helper.classnames(
                        slideColumn === 'right' &&
                            'relative lg:top-20 lg:sticky'
                    )}
                >
                    {right}
                </div>
            </article>
        </div>
    )
}

export default WithGrids
