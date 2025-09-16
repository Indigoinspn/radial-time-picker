import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const DialContainer = styled.div`
  position: relative;
  right: 48px;
  /* border: 1px solid violet; */

  svg {
    position: relative;
    z-index: 1;
  }
`;

export const PeriodContainer = styled.div`
  position: absolute;
  top: 235px;
  left: -172px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 974px;
  height: 160px;
  pointer-events: none;
  z-index: 0;
`;

export const PeriodStartYear = styled.span`
  font-weight: bold;
  font-size: 200px;
  color: ${COLORS.brightBlue};
  line-height: 0;
`;

export const PeriodEndYear = styled.span`
  font-weight: bold;
  font-size: 200px;
  color: ${COLORS.brightPink};
  line-height: 0;
`;
