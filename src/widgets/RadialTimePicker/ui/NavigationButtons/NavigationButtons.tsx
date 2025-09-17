import React from 'react';
import { NavigationProps, PointDisplayProps } from 'widgets/RadialTimePicker/model/types';
import { CounterDisplay } from '../CounterDisplay';
import { Button, ButtonContainer, Container } from './styles';

interface NavigationButtonsProps extends NavigationProps, PointDisplayProps {}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  activePointIndex,
  canNext,
  canPrev,
  onNext,
  onPrev,
  pointsQuantity,
}) => {
  return (
    <Container>
      <CounterDisplay currentItem={activePointIndex + 1} totalItems={pointsQuantity} />

      <ButtonContainer>
        <Button onClick={onPrev} disabled={!canPrev} aria-label="Previous period">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </Button>

        <Button onClick={onNext} disabled={!canNext} aria-label="Next period">
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
