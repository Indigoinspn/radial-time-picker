/**
 * Генерирует последовательность годов от from до to (включительно)
 * в зависимости от направления (isForward)
 */
export const generateYearSequence = (from: number, to: number, isForward: boolean): number[] => {
  const years: number[] = [];

  if (isForward) {
    // Вперёд: от from до to (включительно)
    for (let i = from; i <= to; i++) {
      years.push(i);
    }
  } else {
    // Назад: от from до to (включительно), в обратном порядке
    for (let i = from; i >= to; i--) {
      years.push(i);
    }
  }

  return years;
};
