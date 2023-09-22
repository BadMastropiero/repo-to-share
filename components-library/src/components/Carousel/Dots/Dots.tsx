import React from 'react';

// Styles
import {Dot, Dots as DDots} from './Dots.styles';

// Interfaces
import {DotsProps} from './Dots.interface';

const Dots: React.FC<DotsProps> = ({value, setValue, ammount, ...rest}) => {
  const dotsToRender = [];

  for (let i = 0; i < ammount; i += 1) {
    dotsToRender.push(
      <Dot
        key={i}
        className={
          i === Math.abs((ammount + (value % ammount)) % ammount)
            ? 'ti-dot ti-dot-selected'
            : 'ti-dot'
        }
        selected={i === Math.abs((ammount + (value % ammount)) % ammount)}
        onClick={
          setValue
            ? () => {
                setValue(i);
              }
            : undefined
        }
        // style={{cursor: setValue ? 'pointer' : undefined}}
      />
    );
  }

  return (
    <DDots as="div" {...rest}>
      {dotsToRender}
    </DDots>
  );
};

export default Dots;
