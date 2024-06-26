import React from 'react'

const TransactionHistoryTable = () => {

    const now = Date.now();
    const date = (new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long'
    })).format(now)

    return (
        <table className='table table-auto w-full text-left'>
            <thead className='text-lg font-extrabold'>
                <tr>
                    <th className='py-3 px-4'>Type</th>
                    <th className='py-3 px-4'>From</th>
                    <th className='py-3 px-4'>To</th>
                    <th className='py-3 px-4'>Amount</th>
                    <th className='py-3 px-4'>Txn</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-accent-100/40 text-white font-bold text-[12pt] border-l-accent-100 border-l-4 border-b-2 border-b-black'>
                    <td className='px-4 py-3'>Transfer</td>
                    <td className='px-4 py-3 text-primary-100'>0x000...000</td>
                    <td className='px-4 py-3 text-primary-100'>arewa.eth</td>
                    <td className='px-4 py-3'>---</td>
                    <td className='px-4 py-3 text-primary-100'>{date}</td>
                </tr>

                <tr className='bg-accent-100/40 text-white font-bold text-[12pt] border-l-accent-100 border-l-4 border-b-2 border-b-black'>
                    <td className='px-4 py-3'>Transfer</td>
                    <td className='px-4 py-3 text-primary-100'>0x000...000</td>
                    <td className='px-4 py-3 text-primary-100'>arewa.eth</td>
                    <td className='px-4 py-3'>---</td>
                    <td className='px-4 py-3 text-primary-100'>{date}</td>
                </tr>

                <tr className='bg-accent-100/40 text-white font-bold text-[12pt] border-l-accent-100 border-l-4 border-b-2 border-b-black'>
                    <td className='px-4 py-3'>Transfer</td>
                    <td className='px-4 py-3 text-primary-100'>0x000...000</td>
                    <td className='px-4 py-3 text-primary-100'>arewa.eth</td>
                    <td className='px-4 py-3'>---</td>
                    <td className='px-4 py-3 text-primary-100'>{date}</td>
                </tr>

                <tr className='bg-primary-100/40 text-white font-bold text-[12pt] border-l-accent-100 border-l-4 border-b-2 border-b-black'>
                    <td className='px-4 py-3'>Transfer</td>
                    <td className='px-4 py-3 text-primary-100'>0x000...000</td>
                    <td className='px-4 py-3 text-primary-100'>arewa.eth</td>
                    <td className='px-4 py-3'>---</td>
                    <td className='px-4 py-3 text-primary-100'>{date}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TransactionHistoryTable