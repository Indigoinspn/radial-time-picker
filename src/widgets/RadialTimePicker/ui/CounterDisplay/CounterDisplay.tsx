import React from 'react';
import { ValidPointsQuantity } from 'widgets/RadialTimePicker/model/types';
import { StyledSpan } from './styles';

interface CounterDisplayProps {
  totalItems: ValidPointsQuantity;
  currentItem: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ currentItem, totalItems }) => {
  return (
    <StyledSpan>
      0{currentItem}/0{totalItems}
    </StyledSpan>
  );
};
