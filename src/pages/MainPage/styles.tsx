import { media } from 'shared/lib/media';
import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const Background = styled.div`
  display: none;

  ${media.mobile} {
    position: relative;
    padding: 60px 20px 14px;
    margin: 0;
    height: 568px;
    width: 320px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 20px 5px ${COLORS.semiTransparentGrey};
  }

  ${media.desktop} {
    padding: 60px 0 50px;
    height: 100%;
    width: 100%;
    max-width: 1920px;
    max-height: 1080px;
    box-shadow: none;
  }
`;

export const LinesContainer = styled.div`
  display: none;

  @media screen and (min-width: 1920px) {
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
  display: flex;
  flex-basis: 80px;
  flex-shrink: 0;
  width: 80px;
  height: 100vh;
  border-left: 1px solid ${COLORS.pink};
`;

export const Layout = styled.div`
  position: relative;

  ${media.mobile} {
    height: 100%;
    width: 100%;
  }

  ${media.desktop} {
    height: 800px;
    width: 1440px;
  }
`;
