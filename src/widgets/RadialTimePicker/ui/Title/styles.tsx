import { COLORS } from 'shared/ui/theme/colors';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  width: 430px;
`;
export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 52px;
  font-weight: bold;
  margin: 0;
  color: ${COLORS.blackBlue};
`;
export const DummyBlock = styled.div`
  height: 120px;
  width: 5px;
  margin-right: 78px;
  border-left: 5px solid transparent;
  border-image-source: linear-gradient(${COLORS.brightBlue}, ${COLORS.brightPink});
  border-image-slice: 1;
`;
