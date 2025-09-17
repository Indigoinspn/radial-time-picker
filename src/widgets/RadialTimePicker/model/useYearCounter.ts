import { useEffect, useState } from 'react';
import { PERIODS } from './constants';
import { ActivePointIndex } from './types';
import { generateYearSequence } from './utils';

export const useYearCounter = (activePointIndex: ActivePointIndex, prevActivePointIndex: ActivePointIndex | null) => {
  const [startYear, setStartYear] = useState(PERIODS[activePointIndex].startYear);
  const [endYear, setEndYear] = useState(PERIODS[activePointIndex].endYear);

  useEffect(() => {
    if (prevActivePointIndex === null) {
      setStartYear(PERIODS[activePointIndex].startYear);
      setEndYear(PERIODS[activePointIndex].endYear);
      return;
    }

    if (prevActivePointIndex === activePointIndex) {
      return;
    }

    const isForward = activePointIndex > prevActivePointIndex;

    const startYears = generateYearSequence(PERIODS[prevActivePointIndex].startYear, PERIODS[activePointIndex].startYear, isForward);

    const endYears = generateYearSequence(PERIODS[prevActivePointIndex].endYear, PERIODS[activePointIndex].endYear, isForward);

    let startIdx = 0;
    const startInterval = setInterval(() => {
      setStartYear(startYears[startIdx]);
      startIdx++;
      if (startIdx >= startYears.length) {
        clearInterval(startInterval);
        setStartYear(PERIODS[activePointIndex].startYear);
      }
    }, 50);

    let endIdx = 0;
    const endInterval = setInterval(() => {
      setEndYear(endYears[endIdx]);
      endIdx++;

      if (endIdx >= endYears.length) {
        clearInterval(endInterval);
        setEndYear(PERIODS[activePointIndex].endYear);
      }
    }, 50);

    return () => {
      clearInterval(startInterval);
      clearInterval(endInterval);
    };
  }, [activePointIndex, prevActivePointIndex]);

  return { startYear, endYear };
};
