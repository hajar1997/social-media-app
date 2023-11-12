import { TweetDropdown } from '@/components'
import { trends } from '@/constants'
import { OptionsProps } from '@/types'
import { faArrowLeft, faFaceFrown, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/styles.module.css'

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
const Explore = () => {
  return (
    <div className='px-5  pb-5'>
      <div className=' flex justify-between items-center py-5'>
        <div className='flex gap-8'>
          <Link href="/">
            <FontAwesomeIcon icon={faArrowLeft} className="text-[20px]" />
          </Link>
          <p className='font-bold'>Explore</p>
        </div>
      </div>
      <div className="rounded-xl bg-footer">
        <div className={`${styles.bottom_border} p-3.5`}>
          <span className="text-[#ececec] text-sm font-bold">What's happening</span>
        </div>
        {trends.map((trend, index) => (
          <Link href="#" key={index}>
            <div className={`flex justify-between items-center px-3.5 py-3.5 ${index === 9 ? "" : styles.bottom_border}`}>
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
      </div>
    </div>
  )
}

export default Explore