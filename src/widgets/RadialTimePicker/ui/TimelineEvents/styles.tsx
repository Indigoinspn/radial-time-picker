import { COLORS } from 'shared/ui/theme/colors';
import styled, { css } from 'styled-components';
import { media } from 'shared/lib/media';

export const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  ${media.desktop} {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 56px;
    margin-bottom: 20px;
    align-items: start;
    padding: 0 78px;
  }
`;

export const StyledHorizontalLine = styled.hr`
  width: 280px;
  border-top: 1px solid #c7cdd9;
  margin: 0 0 20px 0;

  ${media.desktop} {
    display: none;
  }
`;

export const EventsContainer = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.4s ease-out;

  ${media.desktop} {
    width: 1280px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export type Position = 'Left' | 'Right';

export const TimelineButton = styled.button<{ $position: Position; disabled: boolean }>`
  display: none;

  ${media.desktop} {
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
  }
`;

export const PeriodLabelMobile = styled.span<{ $isVisible: boolean }>`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 14;
  font-weight: bold;
  color: ${COLORS.darkBlue};
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.4s ease-out;

  ${media.desktop} {
    display: none;
  }
`;
