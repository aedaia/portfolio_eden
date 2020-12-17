import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 0rem 0rem 0rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 0rem 0rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
