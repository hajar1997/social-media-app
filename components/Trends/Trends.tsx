import { trends } from '@/constants'
import styles from '../../styles/styles.module.css'
import Link from 'next/link'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { OptionsProps } from '@/types';
import dynamic from 'next/dynamic';

const TweetDropdown = dynamic(() => import("@/components/TweetDropdown/TweetDropdown"));

const options: OptionsProps[] = [
    {
        label: 'Not interested in this',
        icon: faFaceFrown,
    },
    {
        label: 'This trend is harmful',
        icon: faFaceFrown,
    },
];

const Trends = () => {
    return (
        <div className="rounded-xl bg-footer">
            <div className={`${styles.bottom_border} p-3.5`}>
                <span className="text-[#ececec] text-sm font-bold">What's happening</span>
            </div>
            {trends.slice(0, 5).map((trend, index) => (
                <Link href="#" key={index}>
                    <div  className={`flex justify-between items-center px-3.5 py-3.5 ${index === 4 ? "" : styles.bottom_border}`}>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-[#99a2ab] text-xs'>{trend.topic}</span>
                            <span className='text-[#ececec] text-sm font-bold'>{trend.name}</span>
                            <span className='text-[#99a2ab] text-[11px]'>{trend.tweet_volume}k Tweets</span>
                        </div>
                        <div className='pr-2'>
                            <TweetDropdown options={options} />
                        </div>
                    </div>
                </Link>
            ))}
            <div className={`${styles.top_border} p-3.5`}>
                <Link href="#" className={`text-[#e76f51] text-sm`}>Show More</Link>
            </div>
        </div>
    )
}

export default Trends