import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TweetsLibrary from 'components/TweetsLibrary';
import Filter from 'components/Filter';

const Tweets = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="hidden">Tweets List</h2>
      <div className="mx-auto px-[12px]  w-[460px] md:w-[860px] lg:w-[1280px] ">
        <div className="mb-[12px]  flex justify-center items-center gap-[20px]">
          <button
            className={` w-[196px] h-[50px] px-[28px] py-[14px]
           bg-buttonBg text-secondaryText  rounded-[10px]
           shadow-buttonShadow cursor-pointer
           font-semibold text-[12px]/[14px] uppercase
           hover:bg-activeButtonBg
           `}
            type="button"
            onClick={() => navigate('/')}
          >
            Back to home page
          </button>
          <Filter filter={filter} setFilter={setFilter} />
        </div>

        <TweetsLibrary filter={filter} />
      </div>
    </section>
  );
};

export default Tweets;
