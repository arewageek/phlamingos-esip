import EachTokenInRecentActivities from "./EachTokenInRecentActivities"

const RecentActivities = () => {

    const filterOption = [
        "all", "created", "transferred", "sold", "bid entered", "bid withdrawn", "offered"
    ]

    return (
        <section className='py-5 w-full font-sans'>
            <div className='dark:text-white text-black flex flex-col md:flex-row items-center justify-between gap-4'>
                <h1 className='font-extrabold text-2xl'>
                    Recent Activities
                </h1>
                <div className='flex items-center md:justify-end w-full md:w-fit'>
                    <select className='border-2 border-black dark:border-white px-4 py-2 text-lg capitalize bg-secondary-100 dark:bg-black focus-within:bg-secondary-100 dark:focus-within:bg-black w-full'>
                        {filterOption.map((option) => <option key={option} value={option} className='focus:bg-secondary-100 dark:focus:bg-black capitalize'>{option.toLocaleUpperCase()}</option>)}
                    </select>
                </div>
            </div>

            <div className='min-w-screen overflow-x-auto py-5 flex gap-4'>
                {
                    Array(20).fill(<EachTokenInRecentActivities index={Math.floor(Math.random() * 10000)} time={Math.floor(Math.random() * 23)} image="/images/token.png " key={"200"} receipient="arewa.eth" />)
                }
            </div>

        </section>
    )
}

export default RecentActivities