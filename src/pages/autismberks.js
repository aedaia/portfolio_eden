import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';

const Autismberks = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Autism Berkshire_ COVID19{' '}
      </Title>
      <p>
        I worked with Autism Berkshire during the COVID-19 pandemic to design
        resources and pandemic-related content. While face masks are mandatory
        when in shops or using public transport, there are a number of
        exemptions to this rule – especially children aged under 11 and those
        who find wearing a face covering difficult due to a physical or mental
        illness or impairment, or disability. I designed a face covering
        exemption card in collaboration with Autism Berkshire that can be
        printed and shown when shopping or using a bus or train.&nbsp;
        <Link
          to="https://www.autismberkshire.org.uk/face-covering-exemption-card-july-2020/"
          target="_blank"
        >
          Click here to download the card.
        </Link>
        <br></br>
        <span>07/20–11/20</span>
      </p>
    </Box>
    <img src={require('../images/exemption2.jpg')} alt="hello" />
    <img src={require('../images/exemption.jpg')} alt="hello" />

    <Box>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        Top tips: helping Autistic and ADHD children return to school.
      </Title>
      <p>
        For any child, going back to school in September would be challenging.
        For children with Autism and ADHD, it is even more difficult. I created
        a book of top tips for Autistic and ADHD children returning to school in
        the new school year. The top tips guide is being used by NHS Berkshire
        West and NHS East Berkshire to provide additional support to parents and
        carers.
      </p>
    </Box>

    <img
      src={require('../images/Free_A4_Brochure_Mockup_02+copy.jpg')}
      alt="hello"
    />
    <img src={require('../images/brochure1.jpg')} alt="hello" />
  </Layout>
);

Autismberks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Autismberks;

export const query = graphql`
  query AutismberksQuery {
    autismberksJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
