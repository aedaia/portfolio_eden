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
    <Box>
      <Title as="h2" size="large"><br /><br />
        <h7>hi there!</h7><br /><br />
         <h8> 
          My name&apos;s Eden, and I&apos;m a visual 
          designer specialising in both digital and print. 
          Now you&apos;d better get ready for some colour... <br /><br /><br /><br /><br />
        </h8>
        
        <a href="#Gallery">↓</a>
        <div className="GalleryOne" id="Gallery"></div>
        
        
      </Title>
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
