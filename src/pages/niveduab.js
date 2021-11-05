import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import { Link } from 'gatsby';
import Footer from 'components/footer';

const Niveduab = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Émile Niveduab book design{' '}
      </Title>
      <p>
        Michael Twyman is retired Professor of Typography at the University of
        Reading. The founder of the Department of Typography and Graphic
        Communication, Michael has written over a dozen books and many articles,
        as well as lecturing all over the world. He has dedicated a large
        portion of his professional career to studying lithographic history.
        Émile Niveduab, écrivain-lithographe à Bordeaux dans les années 1830,
        explores, for the first time ever, Émile Niveduab, a key lithographer in
        France (1796–1877).
        <br></br>
        <span>12/17–04/21</span>
      </p>
      <br></br> <br></br> <br></br> <br></br>
    </Box>
    
      <image src={require('../images/niv3.jpg')} alt="hello" />
    <img src={require('../images/niv0.jpg')} alt="hello" />
    <img src={require('../images/niv1.jpg')} alt="hello" />
    <img src={require('../images/niv2.jpg')} alt="hello" />
    
 
    <br></br> <br></br> <br></br> <br></br>
    <Box>
      <Title as="h3" size="medium">
        Research
      </Title>
      <p>
        Researching was key to the success of this project, as I had no idea how
        to design something that looked French or adhered to French typographic
        conventions. The initial research stage consisted of an in-depth
        exploration of similar subject matter, both in French and English. A
        range of different texts were studied to analyse the typographic
        considerations, and several surprising points were noted: French writers
        do not use quotation marks, instead, they opt for ‘guillemets’, which
        require spacing either side; There is always additional spacing around
        French colons and semi-colons; Some French readers hate an accent on a
        capital letter (É), whereas some require it. The target audience for
        Émile Nivedaub was a key focus throughout the research phase of the
        project. People who would buy this book would not only be interested in
        Lithography, but design as a whole, which meant that the typography (and
        typical ‘French’ typographic norms) had to be perfect.
      </p>
      <br></br> <br></br> <br></br> <br></br>
      <Title as="h3" size="medium">
        Design development
      </Title>
      <p>
        After researching thoroughly, it was time to begin setting the inner
        pages of the book. With a specific page size required by the client (224
        x 303mm), I quickly developed a grid to maximise flexibility within the
        design and allow for multiple interesting combinations of text and
        image. With the grid completed, the work on the inner pages began. A
        sample of text was used to plan out the combination of typefaces that
        were appropriately ‘French looking’, but still legible and a pleasure to
        read. This was discussed at length with the client, but eventually it
        was decided that a French-style sans serif for headings and a legible
        serif for body text would be most agreeable, in combination with a
        legible sans serif for the footnotes and captions.
      </p>
    </Box>
  <div>
    <img src={require('../images/grid.png')} alt="hello" />
  </div>

    <br></br> <br></br> <br></br> <br></br>
    <Box>
      <Title as="h3" size="medium">
        Promotional leaflet
      </Title>
      <p>
        After the book had been completed, the client requested a promotional
        leaflet to sell the text to potential stockists. It was imperative that
        the leaflet encompassed the look and feel of the book, as well as
        highlighting some of the most visually effective pages. The client and I
        worked together to select four spreads that we thought would give the
        appropriate flavour of the book. From there, it was simple to replicate
        the style of the book to produce an effective leaflet, by carrying over
        key colours and typeface choices.
      </p>
    </Box>
    <iframe
      title="processFile"
      width="100%"
      height="500px"
      src="https://drive.google.com/file/d/1lPgmvbWGNwhU2ldqDAKgHGXhOIRvg8Mu/preview"
    ></iframe>
    <Footer />
  </Layout>
);

Niveduab.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Niveduab;

export const query = graphql`
  query niveduabQuery {
    nivJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
