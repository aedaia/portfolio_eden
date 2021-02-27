import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Dipmag = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        dipmag{' '}
      </Title>
      <p>
        A streamlined design briefing, created for individuals who hate the
        over-complication of today&apos;s newspapers and magazines. Dip in, dip out,
        access the information you need in an instant, and leave satisfied. Good
        enough for a double dip. Materiality is key to the simplicity of dip. No
        frills, the magazine is printed on simple 140gsm paper, championing the
        real star: the content. With a cover free of any flashy print finishes,
        and crafted from 250gsm cardstock, dip looks and feels clean and
        uncomplicated. Dip prioritises legibility and content above all else,
        but visual interest is not forgotten. The magazine is a cataclysm of
        bright pantone colour and stark black and white images. Dip is designed
        by designers, for designers, so there is a perfect balance between
        strong visual style and legibility.
      </p>
    </Box>
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
  </Layout>
);

Dipmag.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Dipmag;

export const query = graphql`
  query dipmagQuery {
    dipmagJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
