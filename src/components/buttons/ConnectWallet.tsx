'use client'
import { config } from '@/config/wagmi'
import React, { useEffect, useState } from 'react'
import { sepolia } from 'viem/chains'
import { useAccount, useConnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

const ConnectWallet = () => {

    const account = useAccount({ config: config })
    const { connectAsync, isError, error } = useConnect()

    const handleConnect = async () => {
        try {
            if (account.status == 'disconnected') {
                await connectAsync({ chainId: sepolia.id, connector: injected() })
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <button onClick={handleConnect} className="uppercase font-bold items-center justify-center bg-secondary-200 dark:bg-secondary-100 px-4 py-2 text-secondary-100 dark:text-primary-100 text-xs">
            {account.status == "disconnected" ? "CONNECT" : account.status}
        </button>


    )
}

export default ConnectWallet