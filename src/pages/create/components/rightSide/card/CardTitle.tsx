import React from 'react';
import ColorRecord from './ColorRecord';
import { setTitleColor } from '@/store';
const CardTitle2: React.FC<{ title: string; titleColor: string }> = ({
  title,
  titleColor,
}) => {
  return (
    <div className="relative">
      <h1
        className={`text-[22px] font-bold mt-2 overflow-hidden overflow-ellipsis  flex-1 whitespace-nowrap`}
        style={{ color: titleColor }}
      >
        {title || ''}
      </h1>
      {!!title && (
        <ColorRecord
          currentColor={titleColor}
          handleChangeColor={setTitleColor.type}
          additionalStyle="bottom-0 left-[-40px] rotate-[140deg]"
          pickerType={1}
        />
      )}
    </div>
  );
};

export default CardTitle2;
