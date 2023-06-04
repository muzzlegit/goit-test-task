import { useSelector } from 'react-redux';
import { useGetTweetsAmoutQuery } from 'state/api';
import { getFollowList } from 'state/userSlice';

import { ReactComponent as User } from 'assets/images/User.svg';
const StartPage = () => {
  const followList = useSelector(getFollowList);
  const { data: tweetsAmount } = useGetTweetsAmoutQuery();
  return (
    <div className=" text-center text-textSecondary">
      <h1 className="hidden ">Tweets Application</h1>
      <User className="mx-auto mt-[40px] " />
      <h2 className="mt-[20px] px-[20px] text-text text-[50px] font-semibold">
        Welcome!
      </h2>
      <p className="text-[30px]">
        Toaday, we have
        <span className="ml-[8px] text-text">
          {tweetsAmount ? tweetsAmount : 0}
        </span>{' '}
        users! You are wollowing
        <span className="ml-[8px] text-text">
          {followList ? followList.length : 0}
        </span>{' '}
        !
      </p>
    </div>
  );
};

export default StartPage;
