import React from 'react';
import { useSelector } from 'react-redux';
import ColorRecord from './ColorRecord';
import {
  setStackBackgroundColor,
  setStackBorderColor,
  setStackTextColor,
} from '@/store';
const SingleStack: React.FC<{ item: string; index: any }> = ({
  item,
  index,
}) => {
  const { stackBorderColor, stackBackgroundColor, stackTextColor } =
    useSelector((state: any) => {
      return state.card;
    });
  return (
    <div className="relative">
      <p
        className={`py-1 px-4 rounded-full  border-[0.15rem]  mt-2 mr-2 text-[14px] overflow-hidden overflow-ellipsis  whitespace-nowrap `}
        style={{
          backgroundColor: stackBackgroundColor,
          borderColor: stackBorderColor,
          color: stackTextColor,
        }}
      >
        {item}
      </p>
      {index == 0 ? (
        <>
          <ColorRecord
            currentColor={stackBorderColor}
            handleChangeColor={setStackBorderColor.type}
            additionalStyle="top-[36px] left-[-7px] rotate-[60deg]"
            pickerType={1}
          />
          <ColorRecord
            currentColor={stackBackgroundColor}
            handleChangeColor={setStackBackgroundColor.type}
            additionalStyle="top-[-15px] left-[-7px] rotate-[180deg]"
            pickerType={1}
          />
          <ColorRecord
            currentColor={stackTextColor}
            handleChangeColor={setStackTextColor.type}
            additionalStyle="top-6 left-[20px] rotate-[30deg]"
            pickerType={1}
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default SingleStack;
