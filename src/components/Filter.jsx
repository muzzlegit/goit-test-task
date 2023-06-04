import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
const OPTIONS = ['all', 'follow', 'following'];

const Filter = ({ filter, setFilter }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="flex justify-center items-center gap-[10px] w-fit p-[10px] marker:text-textSecondary border-border border rounded-[8px]">
      <h2 className="text-textSecondary">Filter</h2>
      <div className="relative flex justify-center items-center gap-[16px]">
        <BiFilter
          size="24px"
          className={`hover:cursor-pointer ${
            filter === 'all' ? ' text-textSecondary' : ' text-acent'
          }`}
          onClick={() => setShowList(prev => !prev)}
        />
        <span
          className={`px-[10px] py-[4px] min-w-[100px] text-center srounded-[8px] border border-border rounded-[8px] ${
            filter === 'all' ? ' text-textSecondary' : ' text-acent'
          }`}
        >
          {filter}
        </span>
        {showList ? (
          <ul className=" absolute z-50 top-full  mt-[8px] left-0  p-[10px] text-center bg-buttonBg rounded-[8px]">
            {OPTIONS?.map(option => (
              <li
                className={` p-[4px] text-textSecondary rounded-[4px] hover:cursor-pointer hover:bg-activeButtonBg  `}
                key={option}
                id={option}
                onClick={e => {
                  setFilter(e.target.id);
                  setShowList(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
