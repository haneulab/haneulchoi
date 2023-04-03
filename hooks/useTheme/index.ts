import { ThemeContext } from '@studio/contexts/ThemeContext'
import { useContext } from 'react'

export function useTheme() {
    return useContext(ThemeContext)
}
