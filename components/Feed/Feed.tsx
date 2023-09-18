import { tweets } from "@/constants";
import { FollowPeopleSlide, PostTweet, Tweets } from ".."

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