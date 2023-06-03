import { InputSetting } from '@/types';
import React from 'react';
import { useDispatch } from 'react-redux';


const Input: React.FC<InputSetting> = ({
  label,
  type,
  placeHolder,
  additionalClasses,
  value,
  handleOnChange,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className="font-mono text-lg mt-5 mb-5">{label}</p>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full border-2 border-grColor focus:border-primaryColor focus:outline-none rounded-lg px-3 py-4 font-mono"
        value={value}
        onChange={e => dispatch(handleOnChange(e.target.value))}
      />
    </div>
  );
};

export default Input;
