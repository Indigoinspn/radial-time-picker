/**
 * Генерирует последовательность годов от from до to (включительно)
 * в зависимости от направления (isForward)
 */
export const generateYearSequence = (from: number, to: number, isForward: boolean): number[] => {
  const years: number[] = [];

  if (isForward) {
    for (let i = from; i <= to; i++) {
      years.push(i);
    }
  } else {
    for (let i = from; i >= to; i--) {
      years.push(i);
    }
  }

  return years;
};
