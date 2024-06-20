import { ThemeProvider } from 'next-themes'
import React from 'react'
import Web3Provider from './Web3Provider'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute='class'>
            <Web3Provider>
                {children}
            </Web3Provider>
        </ThemeProvider>

    )
}

export default AppProvider