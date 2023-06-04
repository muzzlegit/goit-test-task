import { useSelector } from 'react-redux';
import { useGetTweetsAmoutQuery } from 'state/api';
import { getFollowList } from 'state/userSlice';

import { motion } from 'framer-motion';

import { ReactComponent as User } from 'assets/images/User.svg';
const StartPage = () => {
  const followList = useSelector(getFollowList);
  const { data: tweetsAmount } = useGetTweetsAmoutQuery();
  return (
    <div className=" text-center text-textSecondary">
      <h1 className="hidden ">Tweets Application</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <User className="mx-auto mt-[40px] " />
        <h2 className="mt-[20px] px-[20px] text-text text-[50px] font-semibold">
          Welcome!
        </h2>
        <p className="text-[30px]">
          Today, we have
          <span className="ml-[8px] text-text">
            {tweetsAmount ? tweetsAmount : 0}
          </span>
          users! You are wollowing
          <span className="ml-[8px] text-text">
            {followList ? followList.length : 0}
          </span>
          !
        </p>
      </motion.div>
    </div>
  );
};

export default StartPage;
