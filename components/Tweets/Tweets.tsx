import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { OptionsProps, TweetProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faRetweet, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TweetDropdown, TweetImages } from "..";

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

interface TweetsProps {
  tweet: TweetProps;
}

const Tweets: FunctionComponent<TweetsProps> = ({ tweet }) => {

  return (
    <div className="mt-4 lg:p-5 p-4 bg-footer w-full rounded-[1.3rem] flex gap-4">
      <div>
        <Image src={tweet.profile_image} aria-hidden={true} width={60} height={50} priority alt="profile image" className="rounded-full" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex  justify-between items-center">
          <div className="flex gap-2 items-center">
            <Link href="#">
              <h6 className="text-sm font-bold" >{tweet.name}</h6>
            </Link>
            <Link href="#">
              <span className="text-xs text-[#99a2ab]">{tweet.username}</span>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs text-[#99a2ab]">{tweet.date}</span>
            <div>
              <TweetDropdown options={options} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-2">
          <div>
            <p className="text-xs">{tweet.tweet}</p>
          </div>
          {tweet.images && <TweetImages tweet={tweet} />}
          <div className="flex  justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faThumbsUp} className="text-[17px] text-[#99a2ab]" />
              <span className="text-[#99a2ab] text-xs">{tweet.tweet_likes}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faComment} className="text-[17px] text-[#99a2ab]" />
              <span className="text-[#99a2ab] text-xs">{tweet.tweet_comments}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} className="text-[17px] text-[#99a2ab]" />
              <span className="text-[#99a2ab] text-xs">{tweet.tweet_retweet}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faShareNodes} className="text-[17px] text-[#99a2ab]" />
              <span className="text-[#99a2ab] text-xs">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;



