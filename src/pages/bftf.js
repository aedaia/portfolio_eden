import React from 'react';
import Footer from 'components/footer';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';

const bftf = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Building for the future{' '}
      </Title>
      <p>
        This project involved completely redesigning and remaking the website
        for nonprofit organisation BFTF. I created the website from scratch, as
        well as setting up new email accounts for the staff and managing the
        hosting. Watch the video walkthrough below. &nbsp;
        <br></br>
        <span>07/20–08/20</span>
      </p>
    </Box>

    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="https://youtu.be/UfgWNa6bqUg"
        controls="true"
      />
    </div>

    <Box>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        A complete redesign
      </Title>
      <p>
        I completely ripped out the old site, keeping only the characteristic
        blue and orange colourscheme and the original logo. The new site needed
        to be modern, clean and attention-grabbing, whilst still retaining a
        welcoming atmosphere for both parents and children. To properly
        encapsulate that ‘friendly’ feel, I created a series of illustrations
        that would support the site, seen on the homepage and the family stories
        page.
      </p>
    </Box>

    <img src={require('../images/building2.jpg')} alt="hello" />
    <img src={require('../images/building.jpg')} alt="hello" />
    <Footer />
  </Layout>
);

bftf.propTypes = {
  data: PropTypes.object.isRequired,
};

export default bftf;

export const query = graphql`
  query bftfQuery {
    bftfJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
