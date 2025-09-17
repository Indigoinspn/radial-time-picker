export interface Period {
  id: number;
  name: string;
  startYear: number;
  endYear: number;
  events: Array<{
    year: number;
    description: string;
  }>;
}

export type ValidPointsQuantity = 2 | 3 | 4 | 5 | 6;
export type ActivePointIndex = 0 | 1 | 2 | 3 | 4 | 5;

export interface PointInteractionProps {
  onPointClick: (index: ActivePointIndex) => void;
}

export interface PointDisplayProps {
  pointsQuantity: ValidPointsQuantity;
  activePointIndex: ActivePointIndex;
}

export interface RotatableProps {
  rotation: number;
}

export interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export interface PaginationProps {
  totalItems: ValidPointsQuantity;
  currentItem: number;
}
