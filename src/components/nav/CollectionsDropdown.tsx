'use client';
import { useState } from 'react'

const CollectionsDropdown = () => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className="grid gap-y-2 relative w-full">
            <div className="w-full ">
                <div onClick={() => setDropdown(prev => !prev)} className="h-full px-5 bg-accent-100 border-secondary-100 glitch-btn font-bold flex items-center justify-around">
                    <div className="w-full">CURATED COLLECTIONS</div>
                    <div className={`${dropdown && "rotate-180"} transition`}>
                        V
                    </div>
                </div>

            </div>
            <div className={`w-full bg-secondary-100 p-2 glitch-btn2 absolute top-20 left-0 font-bold gap-3 grid ${!dropdown && "hidden"} transition`}>
                <div>
                    <div>

                    </div>
                    ETHEREUM PHUNKS
                </div>
                <div>
                    <div>

                    </div>
                    MISSING PHUNKS
                </div>
            </div>
        </div>
    )
}

export default CollectionsDropdown