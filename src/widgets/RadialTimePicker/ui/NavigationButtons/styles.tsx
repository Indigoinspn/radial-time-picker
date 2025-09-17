import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid ${COLORS.grey};
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  width: 431px;
  height: 88px;
  padding-left: 78px;
  z-index: 3;
`;
