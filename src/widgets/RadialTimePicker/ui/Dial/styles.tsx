import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const DialContainer = styled.div`
  position: absolute;
  width: 100%;

  svg {
    position: relative;
    z-index: 0;
  }
`;

export const PeriodContainer = styled.div`
  position: absolute;
  top: 235px;
  left: 218px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 974px;
  height: 160px;
  pointer-events: none;
  z-index: 1;
`;

export const PeriodStartYear = styled.span`
  font-weight: bold;
  font-size: 200px;
  color: ${COLORS.violet};
  line-height: 0;
`;

export const PeriodEndYear = styled.span`
  font-weight: bold;
  font-size: 200px;
  color: ${COLORS.brightPink};
  line-height: 0;
`;

export const PointsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  svg {
    position: relative;
    z-index: 2;
  }
`;
