export interface Period {
  id: number;
  name: string;
  //years: string;
  startYear: number;
  endYear: number;
  events: Array<{
    year: number;
    description: string;
  }>;
}

export type ValidPointsQuantity = 2 | 3 | 4 | 5 | 6;
export type ActivePointIndex = 0 | 1 | 2 | 3 | 4 | 5;
