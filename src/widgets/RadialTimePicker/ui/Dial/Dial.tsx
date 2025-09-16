import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from 'shared/ui/theme/colors';
import { BASE_CIRCLE_RADIUS, CENTER, PERIODS, SVG_SIZE } from 'widgets/RadialTimePicker/model/constants';
import { ActivePointIndex, ValidPointsQuantity } from 'widgets/RadialTimePicker/model/types';
import { Points } from '../Points';
import { DialContainer, PeriodContainer, PeriodEndYear, PeriodStartYear } from './styles';
import { useYearCounter } from 'widgets/RadialTimePicker/model/useYearCounter';

interface DialProps {
  pointsQuantity: ValidPointsQuantity;
  rotation: number;
  activePointIndex: ActivePointIndex;
  prevActivePointIndex: ActivePointIndex | null;
  onPointClick: (index: ActivePointIndex) => void;
}

export const Dial = ({ activePointIndex, prevActivePointIndex, onPointClick, pointsQuantity, rotation }: DialProps) => {
  // const startYear = PERIODS[activePointIndex].startYear;
  // const endYear = PERIODS[activePointIndex].endYear;

  const { startYear, endYear } = useYearCounter(activePointIndex, prevActivePointIndex);
  console.log('startYear, endYear', startYear, endYear);

  return (
    <DialContainer>
      <PeriodContainer>
        <PeriodStartYear>{startYear}</PeriodStartYear>
        <PeriodEndYear>{endYear}</PeriodEndYear>
      </PeriodContainer>
      <svg width={`${SVG_SIZE}px`} height={`${SVG_SIZE}px`} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
        <g transform={`rotate(${rotation} ${CENTER} ${CENTER})`}>
          <circle cx={CENTER} cy={CENTER} r={BASE_CIRCLE_RADIUS} fill="none" stroke={COLORS.lightGrey} strokeWidth="2" />

          <Points pointsQuantity={pointsQuantity} activePointIndex={activePointIndex} onPointClick={onPointClick} rotation={rotation} />
        </g>
      </svg>
    </DialContainer>
  );
};
