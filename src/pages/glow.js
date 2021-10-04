import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';
import Footer from 'components/footer';

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
      <br></br> <br></br> <br></br> <br></br>
      </Box>
    
    <img src={require('../images/cae80-eden_sinclair_glow_pitch_page_01.jpg')} alt="hello" />
    <img src={require('../images/sleep.jpg')} alt="hello" />
    <img src={require('../images/chat.jpg')} alt="hello" />
    <img src={require('../images/breathe.jpg')} alt="hello" />
    <img src={require('../images/mood.jpg')} alt="hello" />
    <img src={require('../images/mood2.jpg')} alt="hello" />
 

      <Box>
      <Title as="h3" size="medium">
        The process
      </Title>
    </Box>  
    <iframe title="processFile" width="100%" height="500px" src="https://drive.google.com/file/d/1y7uWE_LGB2A6Ia2S0mLSG5A_rwLeRXce/preview"></iframe>
    <br></br> <br></br> <br></br> <br></br>
    <Box>
    <Title as="h3" size="medium">
        App walkthrough
      </Title>
    

    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="https://youtu.be/BsvbXNDwvuE"
        controls="true"
      />
    </div>
    </Box>
    <Footer />
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
