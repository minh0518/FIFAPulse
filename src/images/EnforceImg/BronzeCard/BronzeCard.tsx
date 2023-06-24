import React from 'react';
import { BronzeCardContainerDiv, EnhancementNumberParagraph } from './BronzeCard.styled';

const BronzeCard = ({ grade }: any) => {
  return (
    <BronzeCardContainerDiv>
      <EnhancementNumberParagraph>{grade}</EnhancementNumberParagraph>
    </BronzeCardContainerDiv>
  );
};

export default BronzeCard;
