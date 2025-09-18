import { COLORS } from 'shared/ui/theme/colors';
import { theme } from 'shared/ui/theme/theme';
import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const EventContainer = styled.div<{ $isFirst: boolean }>`
  width: fit-content;
  height: 125px;
  margin-right: 20px;

  opacity: ${props => (props.$isFirst ? 1 : 0.4)};
  transition: opacity 0.3s ease-in;

  ${media.desktop} {
    opacity: 1;
    margin-right: 80px;
  }
`;
export const EventYear = styled.span`
  font-size: 16px;
  color: ${COLORS.brightBlue};
  font-family: ${({ theme }) => theme.fonts.secondary};

  ${media.desktop} {
    font-size: 25px;
  }
`;
export const EventDescription = styled.p`
  font-size: 14px;
  line-height: 1.45;
  height: 80px;
  width: 166px;
  margin-top: 15px;
  color: ${COLORS.blackBlue};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.desktop} {
    font-size: 20px;
    height: 90px;
    width: 320px;
    line-height: 1.3;
  }
`;
