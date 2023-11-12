import React from 'react'
import { tweets } from '@/constants'
import { Tweets } from '..';

const ProfileMedia = () => {
  const tweetWithImages = tweets.filter((tweet) => tweet.images ? tweet : "");
  console.log(tweetWithImages);

  return (
    <div className='px-5'>
      {tweetWithImages.slice(0,2).map((tweets) => (
        <Tweets key={tweets.username} tweet={tweets} />
      ))}
    </div>
  )
}

export default ProfileMedia