// export interface FetchUsersProps {
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }

import { MouseEventHandler } from "react";

export interface TweetProps {
  name: string;
  username: string;
  date: string;
  profile_image: string;
  images: string[];
  tweet: string;
  tweet_likes: number;
  tweet_comments: number;
  tweet_retweet: number;
}

export interface TweetDetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  tweet: TweetProps;
}
