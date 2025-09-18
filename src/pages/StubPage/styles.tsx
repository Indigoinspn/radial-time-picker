import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const StubPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: ${COLORS.white};
  display: none;

  @media screen and (max-width: 319px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StubText = styled.h1`
  word-break: normal;
  text-align: center;
  font-size: 20px;
  color: ${COLORS.lightGrey};
`;
