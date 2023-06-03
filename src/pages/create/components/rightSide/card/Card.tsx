import React from 'react';
import CardTitle from './CardTitle';
import CardStacks from './CardStack';
import { useSelector } from 'react-redux';
import ColorRecord from './ColorRecord';
import { setCardColor } from '@/store';
import CardImage from './CardImage';

const Card = () => {
  const { title, image, stack, cardColor, titleColor, isHorizontal } =
    useSelector((state: any) => {
      return state.card;
    });

  return (
    <div className={`h-auto relative`}>
      {/* Card */}
      <div
        className={`h-auto p-4 rounded-xl ${
          isHorizontal && 'flex'
        }  ${!isHorizontal && 'w-[270px]'} ${isHorizontal && 'w-[440px]'} `}
        style={{
          background: cardColor,
        }}
        id="cardBody"
      >
        {/* image */}
        {image && (
          <div
            className={`h-[150px] ${isHorizontal && 'w-[160px] mr-2'} `}
          >
            <CardImage
              value={image}
              additionalStyle={`h-[100%] overflow-hidden ${isHorizontal && 'w-[160px]'}`}
            />
          </div>
        )}

        {/* Card Info */}
        <div className="w-full">
          {/* Title */}
          <CardTitle title={title} titleColor={titleColor} />
          {/* Stack */}
          <CardStacks stack={stack} />
        </div>
      </div>

      <ColorRecord
        currentColor={cardColor}
        handleChangeColor={setCardColor.type}
        additionalStyle="bottom-0 left-[-40px] rotate-[140deg]"
        pickerType={2}
      />
    </div>
  );
};

export default Card;
