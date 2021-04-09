import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';

const Dipmag = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        dipmag{' '}
      </Title>
      <p>
        A streamlined design briefing, created for individuals who hate the
        over-complication of today&apos;s newspapers and magazines. Dip in, dip
        out, access the information you need in an instant, and leave satisfied.
        Good enough for a double dip. Materiality is key to the simplicity of
        dip. No frills, the magazine is printed on simple 140gsm paper,
        championing the real star: the content. With a cover free of any flashy
        print finishes, and crafted from 250gsm cardstock, dip looks and feels
        clean and uncomplicated. Dip prioritises legibility and content above
        all else, but visual interest is not forgotten. The magazine is a
        cataclysm of bright pantone colour and stark black and white images. Dip
        is designed by designers, for designers, so there is a perfect balance
        between strong visual style and legibility.
        <br></br>
        <span>04/19–12/20</span>
      </p>
    </Box>
    <img src={require('../images/2b9fe-4.jpg')} alt="hello" />
    <img src={require('../images/2e573-3.jpg')} alt="hello" />
    <img src={require('../images/5bd5f-5.jpg')} alt="hello" />
    <img src={require('../images/12fc3-cover.jpg')} alt="hello" />

    <Box>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        Simple. Streamlined.
      </Title>
      <p>
        Materiality is key to the simplicity of dip. No frills, the magazine is
        printed on simple 140gsm paper, championing the real star: the content.
        With a cover free of any flashy print finishes, and crafted from 250gsm
        cardstock, dip looks and feels clean and uncomplicated. Dip prioritises
        legibility and content above all else, but visual interest is not
        forgotten. The magazine is a cataclysm of bright pantone colour and
        stark black and white images. Dip is designed by designers, for
        designers, so there is a perfect balance between strong visual style and
        legibility. <br></br>
        <br></br>
        Dip&apos;s online site supports the magazine by teasing snippets of
        exclusive articles. The website entices users and encourages them to
        subscribe to the magazine.{' '}
        <Link
          to="https://xd.adobe.com/view/e34065da-8057-4f88-4a8c-ba482f0e1f97-9571/?fullscreen&hints=off"
          target="_blank"
        >
          Check it out.
        </Link>
      </p>
    </Box>
    <img
      src={require('../images/d50bc-eden_sinclair_mockup_3.jpg')}
      alt="hello"
    />
    <img src={require('../images/Backimg.jpg')} alt="hello" />
    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="https://www.youtube.com/watch?v=fU715WEbf8E"
        controls="true"
      />
    </div>
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
