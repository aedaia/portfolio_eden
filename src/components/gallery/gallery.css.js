import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 3rem;
  padding: 0 0rem;
  margin: 2rem 0 0 0;

  
  ${MEDIA.TABLET`
    display: block;
  `};
`;
