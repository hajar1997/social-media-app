import Image from "next/image";
import styles from '../../styles/styles.module.css'
import { TweetProps } from "@/types";
import { FunctionComponent } from "react";
import Link from "next/link";
import { TweetDropdown, TweetImages } from "..";



interface TweetsProps {
  tweet: TweetProps;
}

const Tweets: FunctionComponent<TweetsProps> = ({ tweet }) => {
  return (
    <div className={`${styles.top_border}`}>
      <div className="mt-3 p-4 bg-footer w-full rounded-[1.3rem] flex gap-4">
        <div>
          <Image src={tweet.profile_image} width={60} height={60} alt="profile image" className="rounded-full" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex  justify-between items-center">
            <div className="flex gap-2 items-center">
              <Link href="#">
                <h6 className="text-sm font-bold">{tweet.name}</h6>
              </Link>
              <Link href="#">
                <span className="text-xs text-[#99a2ab]">{tweet.username}</span>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-xs text-[#99a2ab]">{tweet.date}</span>
              <div>
                <TweetDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-2">
            <div>
              <p className="text-xs">{tweet.tweet}</p>
            </div>
            <TweetImages tweet={tweet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;



