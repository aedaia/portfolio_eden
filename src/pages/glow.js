import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';

const Glow = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Glow{' '}
      </Title>
      <p>
        A mental health support app, designed to provide support for teens and
        young people. Combining CBT, breathing techniques and journalling,
        support is provided by trained professional psychologists. All
        illustrations by Eden Sinclair.
        <br></br>
        <span>12/19–04/20</span>
      </p>
    </Box>

    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="https://youtu.be/BsvbXNDwvuE"
        controls="true"
      />
    </div>
  </Layout>
);

Glow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Glow;

export const query = graphql`
  query glowQuery {
    glowJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
