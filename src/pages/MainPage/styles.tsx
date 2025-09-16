import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  //margin-top: 170px;
  height: 800px;
  width: 1460px;
  //border: 1px solid #568eceff;
`;

export const Background = styled.div`
  position: relative;
  padding-top: 60px;
  margin: 0;
  height: 100%;
  /* height: 1080px; */
  width: 1920px;
  //max-width: 100vw;
  max-height: 1080px;
  display: flex;

  //align-items: center;
  justify-content: center;
`;

export const LinesContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: 1080px; */
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Lines = styled.div`
  width: 80px;
  height: 100vh;
  border-left: 1px solid ${COLORS.pink};
`;
