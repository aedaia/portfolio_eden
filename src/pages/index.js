import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql, Button } from 'gatsby';
import Footer from 'components/footer';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        <br />
        <h7>hi there!</h7>
        <br />
        <br />
        <h8>
          My name&apos;s Eden, and I&apos;m a visual designer specialising in
          both digital and print.<br />
          <br />
          <br />
          <br />
        </h8>
        <a href="#Gallery">
          {' '}
          <button> Check out my work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓</button>
        </a>
        &nbsp;
        <a href="aboutme">
          {' '}
          <button id="secondary">
            {' '}
            More about me &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
          </button>
        </a>
        <br />
        <br />
      </Title>
      <div id="Gallery"></div>
      <br></br>
    </Box>

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
