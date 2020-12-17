import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 0;
  padding: 0 40px 40px 40px ;
  margin: 0 0 0 0;

  
  ${MEDIA.TABLET`
    display: block;
    padding: 0;
  `};

`;
