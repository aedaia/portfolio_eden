import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"
import ogImage from "../images/exemption2.jpg" 



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
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export function SEO() {
 
  return (
    <Helmet
      title="I am a page title"
      meta={[
        {
          property: `og:title`,
          content: "I am a title Open Graph protocol will pick up and display",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: `exemption2.jpg`,
        },
      ]}
    />
  )
}

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
