import { tweets } from "@/constants";
import { Divider } from "antd";
import { FollowPeopleSlide, PostTweet, Tweets } from "..";



const Feed = () => {
    return (
        <>
            <PostTweet />
            <FollowPeopleSlide />
            <Divider />
            <div className="mt-3 mb-3 flex flex-col gap-5">
                {tweets.map((tweet, index) => (
                    <Tweets key={index} tweet={tweet} />
                ))}
            </div>
        </>
    )
}

export default Feed