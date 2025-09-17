import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';
import { ACTIVE_POINT_RADIUS, INACTIVE_POINT_RADIUS } from 'widgets/RadialTimePicker/model/constants';

export const ClickableCircle = styled.circle`
  cursor: pointer;
  r: 30;
  fill: transparent;
  stroke: transparent;
  stroke-width: 2px;
`;

export const StyledCircle = styled.circle<{ $isActive: boolean }>`
  pointer-events: none;
  r: ${props => (props.$isActive ? ACTIVE_POINT_RADIUS : INACTIVE_POINT_RADIUS)};
  fill: ${props => (props.$isActive ? COLORS.light : COLORS.darkBlue)};
  stroke: ${props => (props.$isActive ? COLORS.lightGrey : COLORS.darkBlue)};
  stroke-width: 2px;
  transition:
    fill 0.5s linear,
    r 0.3s ease-in-out;
`;

export const PeriodNumber = styled.text<{ $isVisible: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  fill: ${COLORS.darkBlue};
  font-size: 20px;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.7s;
  transition-delay: 0.1s;
  pointer-events: none;
`;

export const PeriodLabel = styled.text<{
  $isActive: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 20px;
  font-weight: bold;
  fill: ${COLORS.darkBlue};
  text-anchor: start;
  opacity: ${props => (props.$isActive ? 1 : 0)};
  transition: opacity 0.2s ease-in;
`;
