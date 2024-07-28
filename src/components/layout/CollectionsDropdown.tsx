'use client';
import { useState } from 'react'

const CollectionsDropdown = ({ device }: { device: "sm" | "lg" }) => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className="grid gap-y-2 relative w-fit text-xs cursor-pointer px-3 hidden">
            <div className={`w-${device == 'lg' && 'full'}`}>
                <div onClick={() => setDropdown(prev => !prev)} className={`h-full px-5 bg-accent-100 border-secondary-100 glitch-btn font-bold flex items-center justify-around`}>
                    {device == 'lg' && <div className="w-full">CURATED COLLECTIONS</div>}
                    <div className={`${dropdown && "rotate-180"} transition`}>
                        <svg _ngcontent-ng-c2965401951="" height="10" viewBox="0 0 25 15" width="12" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2965401951="" d="m10 5v5h5v5h-5v-5h-5v-5zm-5-5v5h-5v-5zm15 5v5h-5v-5zm5-5v5h-5v-5z"></path></svg>
                    </div>
                </div>

            </div>
            <div className={`w-full bg-secondary-100 glitch-btn2 absolute top-20 left-0 font-bold gap-3 z-50 grid ${!dropdown && "hidden"} transition`}>
                <div className='hover:bg-primary-100 dark:hover:bg-primary-200 p-3 transition'>
                    <div>

                    </div>
                    {device == 'lg' && "ETHEREUM PHUNKS"}
                </div>
                <div className='hover:bg-primary-100 dark:hover:bg-primary-200 p-3 transition'>
                    <div>

                    </div>
                    {device == 'lg' && "MISSING PHUNKS"}
                </div>
            </div>
        </div>
    )
}

export default CollectionsDropdown