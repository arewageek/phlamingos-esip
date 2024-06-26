import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EachTokenBox = () => {
    return (
        <Link href="/details/3003" className='w-fit md:w-[60px] h-fit md:h-[60px] flex items-center justify-center'>
            <Image src={"/images/token.png"} className='image-pixelated' height={60} width={60} alt='token' />
        </Link>
    )
}

export default EachTokenBox