import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import Footer from 'components/footer';

const Dognbone = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Dog&amp;bone{' '}
      </Title>
      <p>
        Over one million elderly people report that they go for more than a
        month without speaking to anyone. dog&amp;bone aims to combat loneliness
        and isolation through a simple, easy to use interface that connects
        likeminded people. A responsive platform, dog&amp;bone works on desktop
        and mobile. <br></br>
        <span>12/19–04/20</span>
      </p>
    </Box>
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
    <img src={require('../images/f1bb6-2.jpg')} alt="hello" />
    <img src={require('../images/c74d2-4.jpg')} alt="hello" />
    <img src={require('../images/c8227-untitled-1.jpg')} alt="hello" />
    <img src={require('../images/da991-3.jpg')} alt="hello" />
    <img src={require('../images/fc3d3-6.jpg')} alt="hello" />

    <Box>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        Loneliness and old age
      </Title>
      <p>
        It is estimated that 3.6 million older people in the UK live alone, of
        whom over 2 million are aged 75+. Age UK (2020) report that 1.9 million
        older people often feel ignored or invisible. Over a million elderly
        people report that they go for more than a month without speaking to a
        friend, neighbour or family member (Age UK, 2020). Sadly, loneliness can
        be just &apos;as harmful for health as smoking 15 cigarettes a day&apos;
        (Age UK, 2020). Social isolation can occur for a number of reasons, such
        as ageing, getting weaker, retirement, the deaths of family members or
        illness. Studies show that &apos;5–16% of people aged 65 or over report
        feeling lonely all or most of the time and up to a further 30% say they
        feel lonely “sometimes”&apos; (Cann, P. and Jopling, K., 2011).
        &apos;Someone who&apos;s lonely probably also finds it hard to reach
        out. There&apos;s a stigma surrounding loneliness, and older people tend
        not to ask for help because they have too much pride&apos; (NHS UK,
        2020).
      </p>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        The process
      </Title>
    </Box>  
    <iframe title="processFile" width="100%" height="500px" src="https://drive.google.com/file/d/19qi8RyIHySfa0VM3JGGEi1_1z5sQI1so/preview"></iframe>
    <br></br> <br></br> <br></br> <br></br>
    <Box>
    <Title as="h3" size="medium">
        App walkthrough
      </Title>
      </Box>
    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="https://www.youtube.com/watch?v=SrdDuYUjdc0"
        controls="true"
      />
    </div>
    <Footer />
  </Layout>
);

Dognbone.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Dognbone;

export const query = graphql`
  query DognboneQuery {
    dognboneJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
