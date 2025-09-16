import { COLORS } from 'shared/ui/theme/colors';
import styled, { css } from 'styled-components';

export const TimelineContainer = styled.div`
  position: relative;
  width: 1400px;
  /* height: 240px; */
  margin-top: 36px;
  /* margin-bottom: 50px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0 78px;
  /* border: 1px solid green; */
`;

export const EventsContainer = styled.div`
  width: 1244px;
  /* height: 200px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid red; */
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
