import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const StubPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.white};
  display: none;

  @media screen and (max-width: 1439px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StubText = styled.h1`
  font-size: 100px;
  color: ${COLORS.lightGrey};
`;
