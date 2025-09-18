import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  ${media.desktop} {
    gap: 20px;
  }
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: 2px solid ${COLORS.grey};
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${COLORS.white};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }

  ${media.desktop} {
    width: 50px;
    height: 50px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;

  ${media.desktop} {
    position: static;
    width: 431px;
    height: 88px;
    padding-left: 78px;
    z-index: 3;
  }
`;
