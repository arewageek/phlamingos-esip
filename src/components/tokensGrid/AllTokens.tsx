import React from 'react'
import EachTokenBox from './EachTokenBox'
import Link from 'next/link'

const AllTokens = () => {
    return (
        <div className='font-sans flex flex-col gap-3 w-[90%] mx-auto lg:w-[80%]'>
            <h2 className='font-extrabold text-2xl '>
                All
            </h2>
            <div className='text-lg font-normal text-[11.5pt]'>
                <p>
                    <Link href="/" className='text-primary-100 font-extrabold'>View all 10,000 Phlamingos</Link>
                </p>
            </div>
            <div className='grid bg-primary-100 p-2 xs:tokens-grid-10 tokens-grid-22'>
                {Array(110).fill(<EachTokenBox />)}
            </div>
        </div>
    )
}

export default AllTokens