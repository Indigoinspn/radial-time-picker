import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const DialContainer = styled.div`
  display: block;
  height: fit-content;
  width: 100%;
  margin-bottom: 38px;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  ${media.desktop} {
    height: 615px;
    width: 431px;
  }
`;
