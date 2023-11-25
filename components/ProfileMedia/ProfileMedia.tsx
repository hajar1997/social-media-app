import React from 'react'
import { tweets } from '@/constants'
import { Tweets } from '..';

const ProfileMedia = () => {
  const tweetWithImages = tweets.filter((tweet) => tweet.images ? tweet : "");

  return (
    <div className='px-5'>
      {tweetWithImages.slice(0, 2).map((tweets,index) => (
        <Tweets key={index} tweet={tweets} />
      ))}
    </div>
  )
}

export default ProfileMedia