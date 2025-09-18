import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const DialContainer = styled.div`
  width: 100%;
  height: 72px;
  margin-top: 56px;

  ${media.desktop} {
    width: 100%;
    margin-top: 0;
    position: absolute;
  }

  svg {
    display: none;

    ${media.desktop} {
      display: block;
      position: relative;
      z-index: 0;
    }
  }
`;

export const PeriodContainer = styled.div`
  position: static;
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;

  ${media.desktop} {
    position: absolute;
    top: 235px;
    left: 218px;
    width: 974px;
    height: 160px;
    z-index: 1;
  }
`;

export const PeriodStartYear = styled.span`
  font-weight: bold;
  font-size: 56px;
  color: ${COLORS.brightBlue};
  line-height: 0;

  ${media.desktop} {
    font-size: 200px;
    color: ${COLORS.violet};
  }
`;

export const PeriodEndYear = styled.span`
  font-weight: bold;
  font-size: 56px;
  color: ${COLORS.brightPink};
  line-height: 0;

  ${media.desktop} {
    font-size: 200px;
  }
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

export const PointButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 97px;
  width: 86px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  ${media.desktop} {
    display: none;
  }
`;

export const PointButton = styled.button<{ $isActive: boolean }>`
  display: block;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background-color: ${({ $isActive }) => ($isActive ? COLORS.blackBlue : COLORS.semiTransparentBlackBlue)};
`;
