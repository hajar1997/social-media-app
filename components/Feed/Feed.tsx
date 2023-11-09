import { tweets } from "@/constants";
import dynamic from "next/dynamic";

const FollowPeopleSlide = dynamic(() => import('@/components/FollowPeopleSlide/FollowPeopleSlide'));
const PostTweet = dynamic(() => import('@/components/PostTweet/PostTweet'));
const Tweets = dynamic(() => import('@/components/Tweets/Tweets'));


const Feed = () => {
    return (
        <>
            <PostTweet />
            <FollowPeopleSlide />
            <div className="mt-3 flex flex-col gap-5">
                {tweets.map((tweet) => (
                    <Tweets key={tweet.username} tweet={tweet} />
                ))}
            </div>
        </>
    )
}

export default Feed