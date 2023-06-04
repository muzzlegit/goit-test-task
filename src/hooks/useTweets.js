import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getFollowList } from 'state/userSlice';
import { useGetTweetsQuery, useGetTweetsAmoutQuery } from 'state/api';
import { errorToast } from 'utils/toasts';

const useTweets = filter => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [firstTweetId, setfirstTweetId] = useState(null);
  const followingList = useSelector(getFollowList);
  const { data: tweetsAmount } = useGetTweetsAmoutQuery();
  const { data, isLoading, isError } = useGetTweetsQuery(page);
  const [updatedUser, setUpdatedUser] = useState(null);
  if (isError) errorToast();

  useEffect(() => {
    if (isError || !data?.length) return;
    if (data) {
      setfirstTweetId(data[0].id);
      setTweets(prev => {
        let newTweets = [...prev];
        data.forEach(element => {
          if (!newTweets.find(({ id }) => id === element.id)) {
            newTweets = [...newTweets, element];
          } else {
            newTweets = [
              ...newTweets.filter(({ id }) => id !== element.id),
              element,
            ];
          }
        });
        return newTweets;
      });
    }
  }, [data, isError]);

  useEffect(() => {
    document.getElementById(firstTweetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [firstTweetId]);

  const updateUser = user => {
    setUpdatedUser(user);
  };

  const filteredTweets = useMemo(() => {
    switch (filter) {
      case 'all':
        if (updatedUser) {
          return tweets.map(tweet =>
            tweet.id === updatedUser.id ? updatedUser : tweet
          );
        }
        return tweets;
      case 'follow':
        if (updatedUser) {
          return tweets
            .map(tweet => (tweet.id === updatedUser.id ? updatedUser : tweet))
            .filter(({ id }) => !followingList.includes(id));
        }
        return tweets.filter(({ id }) => !followingList.includes(id));
      case 'following':
        if (updatedUser) {
          return tweets
            .map(tweet => (tweet.id === updatedUser.id ? updatedUser : tweet))
            .filter(({ id }) => followingList.includes(id));
        }
        return tweets.filter(({ id }) => followingList.includes(id));
      default:
        break;
    }
  }, [tweets, followingList, filter, updatedUser]);

  const getNextTweets = () => {
    setPage(prev => prev + 1);
  };

  return {
    tweets,
    filteredTweets,
    tweetsAmount,
    isAllLoad: tweets.length >= tweetsAmount,
    getNextTweets,
    isLoading,
    isError,
    updateUser,
  };
};

export default useTweets;
