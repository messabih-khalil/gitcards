import React from 'react';
import SingleStack from './SingleStack';

const CardStacks2: React.FC<{ stack: string }> = React.memo(({ stack }) => {
  // Separate stack with ,
  const stackItems =
    stack &&
    stack
      .split(',')
      .map((el, index) => <SingleStack key={index} item={el} index={index} />);

  return (
    <div
      className={`flex flex-wrap pt-2 ${
        stackItems && !!stackItems[0]?.props.item && 'h-[90px]'
      } bgw-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap`}
    >
      {stackItems && !!stackItems[0]?.props.item && stackItems}
    </div>
  );
});

CardStacks2.displayName = 'CardStacks';
export default CardStacks2;
