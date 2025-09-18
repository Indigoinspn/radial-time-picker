import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  width: 123px;

  ${media.desktop} {
    height: 120px;
    width: 430px;
  }
`;
export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  color: ${COLORS.blackBlue};

  ${media.desktop} {
    font-size: 52px;
    line-height: 1;
  }
`;

export const DummyBlock = styled.div`
  display: none;

  ${media.desktop} {
    display: block;
    height: 120px;
    width: 5px;
    margin-right: 78px;
    border-left: 5px solid transparent;
    border-image-source: linear-gradient(${COLORS.brightBlue}, ${COLORS.brightPink});
    border-image-slice: 1;
  }
`;
