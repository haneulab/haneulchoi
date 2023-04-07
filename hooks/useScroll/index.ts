import { useEffect, useState } from 'react'

export function useScroll() {
    const [isTop, setIsTop] = useState<boolean>(true)
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>(null)

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

    useEffect(() => {
        let prevScrollY = window.pageYOffset
        function isScrollingDown() {
            const currentScrollY = window.pageYOffset
            const direction: typeof scrollDirection =
                currentScrollY > prevScrollY ? 'down' : 'up'

            if (
                direction !== scrollDirection &&
                (currentScrollY - prevScrollY > 1 ||
                    currentScrollY - prevScrollY < -1)
            ) {
                setScrollDirection(direction)
            }
            prevScrollY = currentScrollY > 0 ? currentScrollY : 0
        }
        window.addEventListener('scroll', isScrollingDown)

        return () => window.removeEventListener('scroll', isScrollingDown)
    }, [scrollDirection])

    useEffect(() => {
        setScrollDirection('up')
    }, [])

    return { isTop, scrollDirection }
}
