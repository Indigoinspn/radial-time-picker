import { COLORS } from 'shared/ui/theme/colors';
import { theme } from 'shared/ui/theme/theme';
import styled from 'styled-components';

export const EventContainer = styled.div`
  width: 320px;
  height: 125px;
`;
export const EventYear = styled.span`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${COLORS.brightBlue};
`;
export const EventDescription = styled.p`
  font-size: 20px;
  height: 90px;
  width: 320px;
  margin-top: 15px;
  color: ${COLORS.blackBlue};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
