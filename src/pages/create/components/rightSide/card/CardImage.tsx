import Image from 'next/image';
import React from 'react';
const CardImage: React.FC<{ value: string; additionalStyle: string }> = ({
  value,
  additionalStyle,
}) => {
  return (
    // h-[170px]
    <div
      className={`rounded-xl overflow-hidden  ${additionalStyle} relative`}
    >
      <Image
        src={value}
        alt="image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    </div>
  );
};

export default CardImage;
