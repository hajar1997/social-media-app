import { TweetProps, TweetRepliesProps } from "@/types";

export const users = [
  {
    first_name: "Anisa",
    last_name: "Keena",
    username: "@anisa_keena",
    job: "Designer",
    avatar: "/rmate2.jpg",
  },
  {
    first_name: "Ima",
    last_name: "Narcisse",
    username: "@ima_narcisse",
    job: "Politician",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Lucile",
    last_name: "Felmlee",
    username: "@lucile_felmlee",
    job: "Politician",
    avatar: "/rmate2.jpg",
  },
  {
    first_name: "Starr",
    last_name: "Shupp",
    username: "@starr_shupp",
    job: "Musician",
    avatar: "/rmate1.jpg",
  },
  {
    first_name: "Macie",
    last_name: "Bellis",
    username: "@macie_bellis",
    job: "Actor",
    avatar: "/rmate2.jpg",
  },
  {
    first_name: "Shane",
    last_name: "Crays",
    username: "@shane_crays",
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
    tweet: "Hi,everyone! How you doing?",
    tweet_likes: 100,
    tweet_comments: 23,
    tweet_retweet: 10,
  },
  {
    name: "Shay Jordan",
    username: "@shay_jordon",
    date: dayAndMonth,
    time: exactTime,
    year: year,
    profile_image: "/rmate2.jpg",
    images: ["/cat1.jpeg", "/cat2.jpeg"],
    tweet: "She sleeps like she pays the bills",
    tweet_likes: 7,
    tweet_comments: 2,
    tweet_retweet: undefined,
  },
  {
    name: "Shay Jordan",
    username: "@shay_jordon",
    date: dayAndMonth,
    time: exactTime,
    year: year,
    profile_image: "/rmate2.jpg",
    images: ["/post-img1.jpg", "/post-img2.jpg"],
    tweet: "Welcome to the Vogel family🙂",
    tweet_likes: 30,
    tweet_comments: 4,
    tweet_retweet: 6,
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
    tweet_likes: 30,
    tweet_comments: 4,
    tweet_retweet: 6,
  },
];

export const tweet_replies: TweetRepliesProps[] = [
  {
    name: "Shay Jordan",
    username: "@shay_jordon",
    date: "19 Feb",
    profile_image: "/rmate2.jpg",
    reply: "Hi,thanks for everything!",
    reply_likes: 1,
    reply_comments: 1,
    reply_retweet: undefined,
  },
  {
    name: "Shay Jordan",
    username: "@shay_jordon",
    date: "19 Feb",
    profile_image: "/rmate2.jpg",
    reply: "What a view!",
    reply_likes: 1,
    reply_comments: 1,
    reply_retweet: undefined,
  },
  {
    name: "Macie Bellis",
    username: "@macie_bellis",
    date: "19 Feb",
    profile_image: "/rmate2.jpg",
    reply: "Hi,thanks for everything!",
    reply_likes: 1,
    reply_comments: 1,
    reply_retweet: undefined,
  },
  {
    name: "John Smith",
    username: "@john_smith",
    date: "19 Feb",
    profile_image: "/rmate1.jpg",
    reply: "Wow,great office!",
    reply_likes: 1,
    reply_comments: 1,
    reply_retweet: undefined,
  },
];

export const trends = [
  {
    topic: "Trending",
    name: "#SingaporeGP",
    tweet_volume: 25,
  },
  {
    topic: "Soccer",
    name: "Liverpool",
    tweet_volume: 18.6,
  },
  {
    topic: "Games",
    name: "Gameday",
    tweet_volume: 22,
  },
  {
    topic: "Trending",
    name: "#TechNews",
    tweet_volume: 16.7,
  },
  {
    topic: "Travel",
    name: "#TravelTuesday",
    tweet_volume: 21,
  },
  {
    topic: "Animals",
    name: "#Caturday",
    tweet_volume: 27.5,
  },
  {
    topic: "Trending",
    name: "#MovieNight",
    tweet_volume: 23,
  },
  {
    topic: "Trending",
    name: "#FoodieChat",
    tweet_volume: 19,
  },
  {
    topic: "Sport",
    name: "#FitnessGoals",
    tweet_volume: 20,
  },
  {
    topic: "Entertainment",
    name: "#BatmanDay",
    tweet_volume: 15.3,
  },
];
