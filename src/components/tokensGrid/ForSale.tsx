import React from 'react'
import EachTokenBox from './EachTokenBox'
import Link from 'next/link'

const ForSale = () => {
    return (
        <div className='font-sans flex flex-col gap-3 w-[90%] mx-auto lg:w-[80%]'>
            <h2 className='font-extrabold text-2xl '>
                For Sale
            </h2>
            <div className='text-lg font-normal text-[12pt]'>
                <p>
                    The lowest price EtherPhunk currently for sale is <b className='font-extrabold'>Ξ0.014 ($48.22 USD).</b>
                </p>
                <p>
                    Showing lowest price offers, <Link href="/" className='text-primary-100 font-bold'>(288) view all.</Link>
                </p>
            </div>
            <div className='grid bg-accent-100 p-2 xs:tokens-grid-10 tokens-grid-22'>
                {Array(110).fill(<EachTokenBox key={Math.random() * 110} />)}
            </div>
        </div>
    )
}

export default ForSale