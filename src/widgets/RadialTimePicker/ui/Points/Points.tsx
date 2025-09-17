import React, { useEffect, useState } from 'react';
import { CENTER_X, CENTER_Y, DIAL_RADIUS, PERIODS } from 'widgets/RadialTimePicker/model/constants';
import { ActivePointIndex, PointDisplayProps, PointInteractionProps, RotatableProps } from 'widgets/RadialTimePicker/model/types';
import { StyledCircle, PeriodLabel, PeriodNumber, ClickableCircle } from './styles';

interface PointsProps extends PointDisplayProps, RotatableProps, PointInteractionProps {}

export const Points = ({ activePointIndex, onPointClick, pointsQuantity, rotation }: PointsProps) => {
  const pointsArray = Array.from({ length: pointsQuantity }, (_, i) => i);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  useEffect(() => {
    setIsLabelVisible(false);
  }, [activePointIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLabelVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [rotation]);

  return (
    <>
      {pointsArray.map(i => {
        const isActive = i === activePointIndex;
        const angle = i * (360 / pointsQuantity);
        const radians = (angle * Math.PI) / 180;
        const x = CENTER_X + DIAL_RADIUS * Math.cos(radians);
        const y = CENTER_Y + DIAL_RADIUS * Math.sin(radians);

        return (
          <>
            <ClickableCircle
              cx={x}
              cy={y}
              key={i + pointsQuantity}
              onClick={() => onPointClick(i as ActivePointIndex)}
              onMouseEnter={() => setHoveredPointIndex(i)}
              onMouseLeave={() => setHoveredPointIndex(null)}
            />
            <StyledCircle cx={x} cy={y} key={i} $isActive={isActive || hoveredPointIndex === i} />
            <g transform={`rotate(${-rotation} ${x} ${y})`}>
              <PeriodNumber y={y + 5} x={x - 6} $isVisible={isActive || hoveredPointIndex === i}>
                {i + 1}
              </PeriodNumber>

              <PeriodLabel y={y} x={x + 50} name={PERIODS[i].name} $isActive={isActive && isLabelVisible}>
                {PERIODS[i].name}
              </PeriodLabel>
            </g>
          </>
        );
      })}
    </>
  );
};
