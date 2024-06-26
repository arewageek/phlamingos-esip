import Image from 'next/image'
import React from 'react'

const HeroSection = ({ image }: { image?: string }) => {
    return (
        <div className='w-screen h-[55vh] bg-primary-100 px-5 text-black flex-base sticky top-0'>
            <Image src={image || "/images/Placeholder-nft.svg"} height={image ? 350 : 330} width={image ? 350 : 330} alt='Placeholder' className='absolute bottom-0 flex p-0 image-pixelated ' />
        </div>
    )
}

export default HeroSection