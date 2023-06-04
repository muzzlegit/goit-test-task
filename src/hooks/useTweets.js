import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFollowList } from 'state/userSlice';
import { useGetTweetsQuery, useGetTweetsAmoutQuery } from 'state/api';
import { errorToast } from 'utils/toasts';

const useTweets = filter => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [firstTweetId, setfirstTweetId] = useState(null);
  const followingList = useSelector(getFollowList);
  const [filteredTweets, setFilteredTweets] = useState(tweets);
  const { data: tweetsAmount } = useGetTweetsAmoutQuery();
  const { data, isLoading, isError } = useGetTweetsQuery(page);

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
  useEffect(() => {
    switch (filter) {
      case 'all':
        setFilteredTweets(tweets);
        break;
      case 'follow':
        setFilteredTweets(
          tweets.filter(({ id }) => !followingList.includes(id))
        );
        break;
      case 'following':
        setFilteredTweets(
          tweets.filter(({ id }) => followingList.includes(id))
        );
        break;
      default:
        break;
    }
  }, [tweets, followingList, filter]);

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
  };
};

export default useTweets;
