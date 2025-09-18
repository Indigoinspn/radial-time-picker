import styled from 'styled-components';
import { media } from 'shared/lib/media';

export const StyledSpan = styled.span`
  font-size: 12px;

  ${media.desktop} {
    font-size: 16px;
  }
`;
