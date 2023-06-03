import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setColorPickerConfig } from '@/store';
import { ColorPickerData } from '@/types';



const ColorRecord: React.FC<ColorPickerData> = ({
  pickerType,
  currentColor,
  handleChangeColor,
  additionalStyle,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(
      setColorPickerConfig({
        currentColor,
        handleChangeColor,
        type: pickerType,
      })
    );
  };
  return (
    <div
      className={`p-2 absolute ${additionalStyle} cursor-pointer z-50`}
      onClick={() => handleOnClick()}
      id="colorRecorderDiv"
    >
      <div
        className="p-1 bg-black rounded-r-full rounded-b-full rotate"
        id="colorRecorderDiv"
      >
        <Image
          src="/assets/color-picker.png"
          width={15}
          height={15}
          alt=""
          className=""
          id="colorRecorderDiv"
        />
      </div>
    </div>
  );
};

export default ColorRecord;
