import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const Background = styled.div`
  display: none;

  @media screen and (min-width: 1440px) and (min-height: 800px) {
    position: relative;
    padding-top: 60px;
    margin: 0;
    height: 100%;
    width: 100%;
    max-width: 1920px;
    max-height: 1080px;
    display: flex;
    justify-content: center;
  }
`;

export const LinesContainer = styled.div`
  display: none;

  @media screen and (min-width: 1920px) and (min-height: 800px) {
    width: 1920px;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

export const Lines = styled.div`
  display: block;
  width: 80px;
  height: 100vh;
  border-left: 1px solid ${COLORS.pink};
`;

export const Layout = styled.div`
  position: relative;
  height: 800px;
  width: 1440px;
`;
