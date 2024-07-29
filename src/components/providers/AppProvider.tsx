"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'
import Web3Provider from './Web3Provider'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute='class'>
            <Web3Provider>
                <RainbowKitProvider theme={darkTheme()}>
                    {children}
                </RainbowKitProvider>
            </Web3Provider>
        </ThemeProvider>

    )
}

export default AppProvider