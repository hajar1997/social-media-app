import React from 'react'
import { Tweets } from '..'
import { tweets } from '@/constants'

const Posts = () => {
    return (
        <div className='px-5 mt-7'>
            {tweets.slice(0,3).map((tweet,index) => (
                <Tweets key={index} tweet={tweet} />
            ))}
        </div>
    )
}

export default Posts