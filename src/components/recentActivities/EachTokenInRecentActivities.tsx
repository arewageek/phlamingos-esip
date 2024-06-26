import { Autour_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

interface TokenActivityProp {
    image: string,
    index: number,
    receipient: string,
    time: number
}

const EachTokenInRecentActivities = ({ image, index, receipient, time }: TokenActivityProp) => {

    // const now = new Date()
    // const date = new Date(time)
    // const diff = (now - date)

    const formattedTime = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' }).format(-time, 'hours')

    return (
        <Link href={`/details/${index}`} className="w-[130px] min-w-[130px] pr-3">
            <div className='h-[130px] bg-accent-100 flex-base'>
                <Image src={image} width={150} height={150} alt="token" className="image-pixelated" />
            </div>
            <div className="pt-2 flex gap-0 flex-col space-y-0 leading-0 text-black dark:text-gray-300">
                <h2 className="text-primary-100 font-extrabold text-lg p-0">
                    #{index}
                </h2>
                <p className="text-base p-0 leading-tight">
                    Transfered to <span className="font-medium">{receipient}</span>
                </p>
                <p className="text-xs p-0">
                    {formattedTime}
                </p>
            </div>
        </Link>
    )
}

export default EachTokenInRecentActivities