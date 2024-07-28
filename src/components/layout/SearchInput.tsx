"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchInput = () => {
    const [input, setInput] = useState<string>()

    const router = useRouter()

    const handleSubmit = () => {
        router.push(`/details/${input}`)
    }

    return (
        <form onSubmit={handleSubmit} className='w-full'>
            <div className="w-full flex">
                <input type="number" min={1} max={10000} onChange={(e) => setInput(e.target.value)} placeholder="SEARCH 0X, ENS, OR ENSCRIPTION ID" className="py-3 px-5 w-full bg-black/10 focus-within:ring-0 focus-within:ring-offset-0" />
                <button className="text-primary-100 dark:text-primary-200 bg-secondary-200 dark:bg-secondary-100 px-6 py-2 font-bold border-transparent">GO</button>
            </div>
        </form>
    )
}

export default SearchInput