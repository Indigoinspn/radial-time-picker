import React from 'react';
import { PaginationProps } from 'widgets/RadialTimePicker/model/types';
import { StyledSpan } from './styles';

interface CounterDisplayProps extends PaginationProps {}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ currentItem, totalItems }) => {
  return (
    <StyledSpan>
      0{currentItem}/0{totalItems}
    </StyledSpan>
  );
};
