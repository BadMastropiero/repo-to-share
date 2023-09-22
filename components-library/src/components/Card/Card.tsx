import React from 'react';

// Styles
import {StyledCard, BlogCard, ServiceCard, CardDoubleSidedWrapper} from './Card.styles';

// Interfaces
import {CardProps} from './Card.interface';

const Card: React.FC<CardProps> = ({children, variant, disabled, animateCardFlip, ...rest}) => {
  let SelectedCard = StyledCard;
  if (variant === 'service') SelectedCard = ServiceCard;
  if (variant === 'blog') SelectedCard = BlogCard;

  if (animateCardFlip === 'flip') {
    return (
      <CardDoubleSidedWrapper>
        <SelectedCard disabled={disabled} {...rest}>
          {children}
        </SelectedCard>
      </CardDoubleSidedWrapper>
    );
  }
  return (
    <SelectedCard disabled={disabled} {...rest}>
      {children}
    </SelectedCard>
  );
};

export default Card;
