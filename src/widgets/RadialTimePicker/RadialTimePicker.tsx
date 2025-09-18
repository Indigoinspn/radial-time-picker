import React, { useEffect, useRef } from 'react';
import { PERIODS } from './model/constants';
import { ActivePointIndex, ValidPointsQuantity } from './model/types';
import { useRadialAnimation } from './model/useRadialAnimation';
import { Column, DialContainer } from './styles';
import { Dial } from './ui/Dial';
import { NavigationButtons } from './ui/NavigationButtons';
import { TimelineEvents } from './ui/TimelineEvents';
import { Title } from './ui/Title';

interface RadialTimePickerProps {
  pointsQuantity?: ValidPointsQuantity;
  initialActiveIndex?: ActivePointIndex;
}

export const RadialTimePicker: React.FC<RadialTimePickerProps> = ({ initialActiveIndex = 0, pointsQuantity = 6 }) => {
  const [activePointIndex, setActivePointIndex] = React.useState(initialActiveIndex);
  const { rotateTo, rotation } = useRadialAnimation(pointsQuantity, initialActiveIndex, activePointIndex);

  const prevActivePointIndexRef = useRef<ActivePointIndex | null>(null);

  const handlePointClick = (index: ActivePointIndex) => {
    setActivePointIndex(index);
    rotateTo(index);
  };

  const handlePrev = () => {
    if (activePointIndex > 0) {
      const newIndex = activePointIndex - 1;
      setActivePointIndex(newIndex as ActivePointIndex);
      rotateTo(newIndex as ActivePointIndex);
    }
  };

  const handleNext = () => {
    if (activePointIndex < PERIODS.length - 1) {
      const newIndex = activePointIndex + 1;
      setActivePointIndex(newIndex as ActivePointIndex);
      rotateTo(newIndex as ActivePointIndex);
    }
  };

  useEffect(() => {
    return () => {
      prevActivePointIndexRef.current = activePointIndex;
    };
  }, [activePointIndex]);

  return (
    <>
      <DialContainer>
        <Column>
          <Title />

          <NavigationButtons
            onPrev={handlePrev}
            onNext={handleNext}
            canPrev={activePointIndex > 0}
            canNext={activePointIndex < pointsQuantity - 1}
            activePointIndex={activePointIndex}
            pointsQuantity={pointsQuantity}
          />
        </Column>

        <Dial
          pointsQuantity={pointsQuantity}
          rotation={rotation}
          activePointIndex={activePointIndex}
          onPointClick={handlePointClick}
          prevActivePointIndex={prevActivePointIndexRef.current}
        />
      </DialContainer>

      <TimelineEvents activePointIndex={activePointIndex} />
    </>
  );
};
