import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import MyFace from 'components/myface';
import { graphql } from 'gatsby';

const About = () => (
  <Layout>
    <MyFace />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
