import HeroSection from '@/components/Layout/HeroSection'
import TransactionHistoryTable from '@/components/tokenHistory/TransactionHistoryTable'
import Link from 'next/link'
import React from 'react'
// import { useAccount } from "wagmi"

const TokenDetailsPage = ({ params }: { params: { address: string } }) => {

    const id = params.address
    // cosnt { account } = useAccount()
    const isWalletConnected: boolean = false;


    const tokenData = {
        id,
        tokenAddress: "0x00",
        image: "/images/token.png",
        address: id
    }



    return (
        <div>
            <HeroSection image={tokenData.image} />

            <div className='w-full sticky top-0 bg-secondary-100 dark:bg-black font-sans'>
                <div className='bg-gray-600/30 p-2 flex items-center justify-between px-10 w-full'>
                    <div className='mx-auto lg:w-[65%] w-full flex items-center justify-between'>
                        <div className='font-normal text-xl flex gap-3'>
                            <h2 className='text-primary-100'>
                                Phlamingos
                            </h2>
                            <span>
                                {' '}/{' '}{id}
                            </span>
                        </div>
                        <div>
                            <button className='text-primary-100 font-bold text-[11.7pt]'>
                                Download
                            </button>
                        </div>
                    </div>
                </div>

                <div className='py-20 w-full lg:w-[65%] mx-auto px-10 flex flex-col gap-10'>
                    <div className='px-0 flex flex-col gap-2'>
                        <h2 className='text-5xl font-extrabold'>
                            Phlamingos <span className='text-3xl'>#</span>{id}
                        </h2>
                        <span className='font-medium'>
                            Provenance Hash: 0x5c9...6add7
                        </span>
                        <p className='text-lg font-bold'>
                            One of 6039 <Link href="#" className="text-primary-100">Male</Link> Ethereum Phunks.
                        </p>
                    </div>

                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='w-full md:w-1/3'>
                            <h3 className='text-2xl font-extrabold'>
                                Market Status
                            </h3>
                            <p className='text-lg'>
                                This Phlamingos is owned by <b className='font-bold text-primary-100'>chicity213.eth</b><br />

                                This Phlamingos is not for sale.
                            </p>
                            <div className='py-5'>
                                {!isWalletConnected && <div className='font-bold text-primary-100 bg-black/40 dark:bg-secondary-100/40 p-2 px-3'>
                                    Connect an Ethereum wallet to interact with this item
                                </div>}
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 flex flex-col gap-3'>
                            <h3 className='text-2xl font-extrabold'>
                                Attributes
                            </h3>
                            <div className='flex flex-col gap-3'>
                                <div className='text-xl'>
                                    <h3 className='text-primary-100 font-extrabold'>Earring 24.6%</h3>
                                    <p>
                                        <b className='font-bold'>2459</b> Phlamingos have this.
                                    </p>
                                </div>

                                <div className='text-xl'>
                                    <h3 className='text-primary-100 font-extrabold'>Knitted Cap 4.2%</h3>
                                    <p>
                                        <b className='font-bold'>419</b> Phlamingos have this.
                                    </p>
                                </div>

                                <div className='text-xl'>
                                    <h3 className='text-primary-100 font-extrabold'>Nerd Glasses 5.7%</h3>
                                    <p>
                                        <b className='font-bold'>517</b> Phlamingos have this.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold'>
                            Transaction History
                        </h3>
                        <div className='mt-10 w-full'>
                            <TransactionHistoryTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenDetailsPage