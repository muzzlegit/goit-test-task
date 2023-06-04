import Card from './Card';

import useTweets from 'hooks/useTweets';

import { Circles } from 'react-loader-spinner';

const TweetsLibrary = ({ filter }) => {
  const {
    updateUser,
    tweets,
    filteredTweets,
    tweetsAmount,
    getNextTweets,
    isAllLoad,
    isLoading,
    isError,
  } = useTweets(filter);

  return (
    <div className=" flex flex-col gap-[10px] text-textSecondary ">
      <p className=" ml-auto ">
        Users:
        <span
          className={`ml-[10px] px-[10px] py-[4px] ${
            tweets?.length === tweetsAmount
              ? 'text-acent'
              : 'text-textSecondary'
          }  rounded-full border-border border`}
        >
          {isLoading ? '0/0' : `${tweets?.length}/${tweetsAmount}`}
        </span>
      </p>
      {isError ? (
        <p className="text-center text-red text-[40px]">Error! Not found!</p>
      ) : (
        <>
          <div
            className={`w-full h-[500px] p-[20px] rounded-[20px] border-border border ${
              isLoading ? 'flex justify-center items-center' : 'none'
            }`}
          >
            {isLoading ? (
              <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
              />
            ) : (
              <div className="h-[460px] overflow-y-auto  flex flex-wrap justify-start gap-[20px] ">
                {filteredTweets?.length ? (
                  filteredTweets?.map(tweet => (
                    <Card
                      key={tweet.id}
                      tweet={tweet}
                      updateUser={updateUser}
                    />
                  ))
                ) : (
                  <p className="mx-auto text-acent text-[30px]">
                    You have't followings!
                  </p>
                )}
              </div>
            )}
          </div>
          <button
            className={`mx-auto w-[196px] h-[50px] px-[28px] py-[14px] ${
              isAllLoad
                ? 'bg-primary text-text '
                : 'bg-buttonBg hover:bg-activeButtonBg active:bg-buttonBg text-textSecondary'
            } rounded-[10px] shadow-buttonShadow cursor-pointer  font-semibold text-[18px]/[22px] uppercase`}
            type="button"
            onClick={getNextTweets}
            disabled={isAllLoad}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default TweetsLibrary;
