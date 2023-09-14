import { TweetDetailModalProps, TweetProps, TweetRepliesProps } from "@/types";

export const users = [
  {
    first_name: "Anisa",
    last_name: "Keena",
    job: "Designer",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Ima",
    last_name: "Narcisse",
    job: "Politician",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Lucile",
    last_name: "Felmlee",
    job: "Politician",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Starr",
    last_name: "Shupp",
    job: "Musician",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Macie",
    last_name: "Bellis",
    job: "Actor",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Shane",
    last_name: "Crays",
    job: "Model",
    avatar: "/rmate1.jpg",
  },
];

const currentDate = new Date();
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(currentDate);
const year = currentDate.getFullYear();
const dayAndMonth = `${day} ${month}`;
const exactTime = `${hour}:${minute}`;

export const tweets: TweetProps[] = [
  {
    name: "Shay Jordan",
    username: "@shay_jordon",
    date: dayAndMonth,
    time: exactTime,
    year: year,
    profile_image: "/rmate2.jpg",
    images: ["/post-img1.jpg", "/post-img2.jpg"],
    tweet: "Welcome to the Vogel family🙂",
    tweet_likes: 30.4,
    tweet_comments: 4.0,
    tweet_retweet: 617,
  },
  {
    name: "John Smith",
    username: "@john_smith",
    date: dayAndMonth,
    time: exactTime,
    year: year,
    profile_image: "/rmate1.jpg",
    images: ["/post2.png"],
    tweet:
      "Nam malis menandri ea, facete debitis volumus est ut, commune placerat nominati ei sea. Labore alterum probatus no sed, ius ea quas iusto inermis, ex tantas populo nonumes nam. Quo ad verear copiosae gubergren, quis commodo est et",
    tweet_likes: 30.4,
    tweet_comments: 4.0,
    tweet_retweet: 617,
  },
];

export const tweet_replies: TweetRepliesProps[] = [
  {
    name: "Macie Bellis",
    username: "@macie_bellis",
    date: "19 Feb",
    profile_image: "/rmate2.jpg",
    reply: "Hi,thanks for everything!",
  },
  {
    name: "John Smith",
    username: "@john_smith",
    date: "19 Feb",
    profile_image: "/rmate1.jpg",
    reply: "Wow,great office!",
  },
];
