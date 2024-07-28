import React from 'react'
import { BsGithub, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='w-full px-10 py-7 flex flex-col gap-y-4 items-center justify-center font-sans dark:bg-black bg-secondary-100 text-[8pt] dark:text-white text-black font-semibold'>
            <div className='flex items-center justify-center gap-3'>
                <div className='text-2xl dark:text-gray-300 text-gray-800'>
                    <BsTwitterX />
                </div>
                <div className='text-2xl dark:text-gray-300 text-gray-800'>
                    <BsGithub />
                </div>
            </div>

            <div className='grid gap text-center'>
                <p>Market Place: <a href="#" className='text-primary-100'>0x00</a></p>
                <p>Points: <a href="#" className='text-primary-100'>0x00</a></p>
                <p>Contributions: <a href="#" className='text-primary-100'>0x00</a></p>
            </div>

            <div className='w-3/4 lg:w-2/5 text-center'>
                By using this app, you accept all risks associated, including the loss of funds. The creators of Phlamingos Ethscrption Market are not liable for any issues or damages that may arise from its use.
            </div>

            <div className='w-3/4 lg:w-2/5 text-center'>
                Experience the future of Web3 👍
            </div>
        </footer >
    )
}

export default Footer   