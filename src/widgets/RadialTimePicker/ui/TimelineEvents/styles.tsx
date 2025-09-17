import { COLORS } from 'shared/ui/theme/colors';
import styled, { css } from 'styled-components';

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0 78px;
`;

export const EventsContainer = styled.div<{ $isVisible: boolean }>`
  width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.4s ease-out;
`;

export type Position = 'Left' | 'Right';

export const TimelineButton = styled.button<{ $position: Position; disabled: boolean }>`
  position: absolute;
  top: 50px;
  ${({ $position }) =>
    $position === 'Left'
      ? css`
          left: 20px;
        `
      : css`
          right: 20px;
        `};

  background: ${COLORS.white};
  border: 2px solid ${COLORS.lightGrey};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0 : 1)};
  visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 0px 20px 5px ${COLORS.semiTransparentGrey};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    opacity: 1;
    transition: all 0.5s;
  }
`;
