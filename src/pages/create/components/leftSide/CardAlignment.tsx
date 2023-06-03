import { setIsHorizontal } from '@/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CardAlignment = () => {
  const dispatch = useDispatch();
  const isHorizontal = useSelector((state: any) => state.card.isHorizontal);
  return (
    <div>
      <p className="font-mono text-lg my-5">Card Style</p>
      <div className="flex gap-2">
        <button
          className={`p-5  flex-1 h-40 flex items-center justify-center rounded-lg border-[3px] border-dotted border-grColor bg-gray-50 text-xl text-gray-400 ${
            !isHorizontal && 'border-primaryColor text-primaryColor'
          }`}
          onClick={() => dispatch(setIsHorizontal(false))}
        >
          Vertical
        </button>
        <button
          className={`p-5  flex-1 h-40 flex items-center justify-center rounded-lg  border-[3px] border-dotted border-grColor bg-gray-50 text-xl text-gray-400 ${
            isHorizontal && 'border-primaryColor text-primaryColor'
          }`}
          onClick={() => dispatch(setIsHorizontal(true))}
        >
          Horizontal
        </button>
      </div>
    </div>
  );
};

export default CardAlignment;
