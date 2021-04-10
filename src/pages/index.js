import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import Footer from 'components/footer';

const Index = ({ data }) => (
  <Layout>
    {/* <Box>
      <Title as="h2" size="large">
        <h2>
          Hi! my name&apos;s Eden. I like designing UI and making cool things.{' '}
          <mark></mark>Check out some of the stuff I&apos;ve made–{' '}
        </h2>
      </Title>
    </Box> */}
    <Gallery items={data.homeJson.gallery} />
    {/* <div style={{ height: '50vh' }} /> */}
    <Footer />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        link
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
