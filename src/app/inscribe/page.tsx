import Inscriber from '@/components/inscribe/Inscriber'
import React from 'react'

const InscribePage = () => {
    return (
        <div className='px-10 lg:px-20 py-20'>
            <div className='w-full lg:w-2/3 mx-auto min-h-[70vh] flex items-center justify-center flex-col gap-y-4'>
                <h3 className='text-lg font-bold'>
                    INSCRIBE COLLECTION OR IMAGE
                </h3>

                <div className='w-full'>
                    <Inscriber />
                </div>
            </div>
        </div>
    )
}

export default InscribePage