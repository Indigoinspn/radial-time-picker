import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Column = styled.div`
  height: 615px;
  width: 431px;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`;
