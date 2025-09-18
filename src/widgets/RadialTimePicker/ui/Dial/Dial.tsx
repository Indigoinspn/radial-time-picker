import React from 'react';
import { COLORS } from 'shared/ui/theme/colors';
import { BASE_CIRCLE_RADIUS, CENTER_X, CENTER_Y, SVG_HEIGHT, SVG_WIDTH } from 'widgets/RadialTimePicker/model/constants';
import { ActivePointIndex, PointDisplayProps, PointInteractionProps, RotatableProps } from 'widgets/RadialTimePicker/model/types';
import { Points } from '../Points';
import {
  DialContainer,
  PeriodContainer,
  PeriodEndYear,
  PeriodStartYear,
  PointButton,
  PointButtonContainer,
  PointsContainer,
} from './styles';
import { useYearCounter } from 'widgets/RadialTimePicker/model/useYearCounter';
import { createArray } from 'widgets/RadialTimePicker/model/utils';

interface DialProps extends PointDisplayProps, RotatableProps, PointInteractionProps {
  prevActivePointIndex: ActivePointIndex | null;
}
export const Dial = ({ activePointIndex, prevActivePointIndex, onPointClick, pointsQuantity, rotation }: DialProps) => {
  const { startYear, endYear } = useYearCounter(activePointIndex, prevActivePointIndex);
  const pointButtonsArray = createArray(pointsQuantity);

  return (
    <DialContainer>
      <svg width={`${SVG_WIDTH}px`} height={`${SVG_HEIGHT}px`} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
        <line x1="0" y1={CENTER_Y} x2={SVG_WIDTH} y2={CENTER_Y} stroke={COLORS.lightGrey} strokeWidth="1" />
        <g transform={`rotate(${rotation} ${CENTER_X} ${CENTER_Y})`}>
          <circle cx={CENTER_X} cy={CENTER_Y} r={BASE_CIRCLE_RADIUS} fill="none" stroke={COLORS.lightGrey} strokeWidth="2" />
        </g>
      </svg>
      <PointsContainer>
        <svg width={`${SVG_WIDTH}px`} height={`${SVG_HEIGHT}px`} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
          <g transform={`rotate(${rotation} ${CENTER_X} ${CENTER_Y})`}>
            <Points pointsQuantity={pointsQuantity} activePointIndex={activePointIndex} onPointClick={onPointClick} rotation={rotation} />
          </g>
        </svg>
      </PointsContainer>

      <PointButtonContainer>
        {pointButtonsArray.map(i => {
          return (
            <PointButton
              key={i + pointsQuantity * 2}
              onClick={() => onPointClick(i as ActivePointIndex)}
              $isActive={i === activePointIndex}
            />
          );
        })}
      </PointButtonContainer>

      <PeriodContainer>
        <PeriodStartYear>{startYear}</PeriodStartYear>
        <PeriodEndYear>{endYear}</PeriodEndYear>
      </PeriodContainer>
    </DialContainer>
  );
};
