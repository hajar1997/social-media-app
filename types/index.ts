// export interface FetchUsersProps {
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TweetProps {
  name: string;
  username: string;
  date: string;
  time: string;
  year: number;
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

export interface TweetRepliesProps {
  name: string;
  username: string;
  date: string;
  profile_image: string;
  reply: string;
}

export interface OptionsProps {
  label: any;
  icon: IconDefinition;
}

export interface MobileNavbarProps {
  isOpen: boolean;
  closeModal: () => void;
}