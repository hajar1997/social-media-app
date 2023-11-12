import React from 'react'
import { TweetDropdown, TweetImages, Tweets } from '..'
import { tweet_replies } from '@/constants'
import { FunctionComponent } from "react";
import { OptionsProps, TweetProps, TweetRepliesProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faRetweet, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';

const options: OptionsProps[] = [
  {
    label: 'Edit',
    icon: faEdit,
  },
  {
    label: 'Delete',
    icon: faTrash,
  },
];

interface RepliesProps {
  tweet: TweetRepliesProps;
}

const Replies: FunctionComponent<RepliesProps> = () => {

  return (
    <div className='px-5'>
      {tweet_replies && tweet_replies.slice(0, 2).map((replies) => (
        <div className="mt-4 lg:p-5 p-4 bg-footer w-full rounded-[1.3rem] flex gap-4">
          <div>
            <Image src={replies.profile_image} aria-hidden={true} width={60} height={50} priority alt="profile image" className="rounded-full" />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex  justify-between items-center">
              <div className="flex gap-2 items-center">
                <Link href="#">
                  <h6 className="text-sm font-bold" >{replies.name}</h6>
                </Link>
                <Link href="#">
                  <span className="text-xs text-[#99a2ab]">{replies.username}</span>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-[#99a2ab]">{replies.date}</span>
                <div>
                  <TweetDropdown options={options} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-2">
              <div>
                <p className="text-xs">{replies.reply}</p>
              </div>
              {/* {replies.images && <TweetImages tweet={replies} />} */}
              <div className="flex  justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-[17px] text-[#99a2ab]" />
                  <span className="text-[#99a2ab] text-xs">{replies.reply_likes}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faComment} className="text-[17px] text-[#99a2ab]" />
                  <span className="text-[#99a2ab] text-xs">{replies.reply_comments}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faRetweet} className="text-[17px] text-[#99a2ab]" />
                  <span className="text-[#99a2ab] text-xs">{replies.reply_retweet}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faShareNodes} className="text-[17px] text-[#99a2ab]" />
                  <span className="text-[#99a2ab] text-xs">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Replies