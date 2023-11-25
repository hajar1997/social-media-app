'use client';

import { TweetProps } from '@/types';
import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { TweetDetailModal } from '..';


interface TweetsProps {
    tweet: TweetProps;
}

const TweetImages: FunctionComponent<TweetsProps> = ({ tweet }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {tweet?.images?.length === 4 ? (
                <div className="flex gap-[2px] w-full cursor-pointer" onClick={() => setIsOpen(true)}>
                    <div className="w-full flex gap-[2px] flex-col" >
                    </div>
                    <div className="w-full flex gap-[2px] flex-col">
                    </div>
                </div>
            ) : tweet?.images?.length === 3 ? (
                <div className="flex gap-[2px] w-full cursor-pointer" onClick={() => setIsOpen(true)}>
                    <div className="w-full">
                        <Image loading='lazy' src={tweet.images[0]} alt="tweet images" width={255} height={288} className="h-[288px] w-full object-cover rounded-l-md" />
                    </div>
                    <div className="w-full  flex gap-[2px] flex-col">
                    </div>
                </div>
            ) : tweet?.images?.length === 2 ? (
                <div className="w-full flex gap-[2px] cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Image loading='lazy' src={tweet.images[0]} alt="tweet images" width={514} height={288} className="h-[288px] w-full object-cover  rounded-l-md" />
                    <Image loading='lazy' src={tweet.images[1]} alt="tweet images" width={514} height={288} className="h-[288px] w-full object-cover rounded-r-md" />
                </div>
            ) : tweet?.images?.length ? (
                <div className="w-full cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Image loading='lazy' src={tweet.images[0]} alt="tweet images" width={514} height={288} className="h-[288px] w-full   rounded-l-md" />
                </div>
            ) : ""}
            <TweetDetailModal isOpen={isOpen} tweet={tweet} closeModal={() => setIsOpen(false)} />
        </div>
    )
}

export default TweetImages