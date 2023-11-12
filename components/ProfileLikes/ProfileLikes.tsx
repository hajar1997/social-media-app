import React from 'react'
import { tweets } from '@/constants'
import { Tweets } from '..'

const ProfileLikes = () => {
    return (
        <div className='px-5'>
            {tweets.slice(-1).map((tweet) => (
                <Tweets key={tweet.username} tweet={tweet} />
            ))}
        </div>
    )
}

export default ProfileLikes