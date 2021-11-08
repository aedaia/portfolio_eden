import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import Timeline2 from 'components/timeline2';
import photo from './eden.jpg';
import Footer from 'components/footer';

const Aboutme = ({ data }) => (
  <div className="black">
    <Layout>
      <div className="aboutMe">
        <Title as="h2" size="large">
          <div className="aboutMeName">
            <br />
            <h7>about me </h7>
            <br />
            <br />
            <h8>
              I graduated from the University of Reading in 2020 and have been
              working at IBM as a visual designer ever since. I am currently on
              the Robotic Process Automation team, working to improve the design
              and accessibility.
            </h8>
          </div>
          <div className="aboutMePhoto">
            <img
              src={photo}
              style={{ height: 545, width: 545}}
              alt="Face"
              className="photo"
            />
          </div>
        </Title>
      </div>

      <div className="white">
        <Box>
          <Title as="h2" size="large">
            <br />
            <h7>my experience</h7>
            <br />
          </Title>
        </Box>
        <Timeline2 />
        <Footer />
      </div>
    </Layout>
  </div>
);

Aboutme.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Aboutme;

export const query = graphql`
  query AboutmeQuery {
    aboutmeJson {
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
