import { useEffect, useState } from 'react'

export function useScroll() {
    const [isTop, setIsTop] = useState<boolean>(true)

    useEffect(() => {
        function isPageYOff() {
            const positionY = window.pageYOffset
            if (positionY === 0) {
                setIsTop(true)
            } else {
                setIsTop(false)
            }
        }
        window.addEventListener('scroll', isPageYOff)

        return () => window.removeEventListener('scroll', isPageYOff)
    }, [])

    return { isTop }
}
