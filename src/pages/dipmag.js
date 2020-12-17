import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Dipmag = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        dipmag{' '}
      </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est
        magna. Etiam posuere id tortor vel venenatis. Ut hendrerit tempor orci
        eu convallis. Pellentesque at metus quis felis rutrum vulputate. Ut in
        quam lorem. Praesent gravida sapien ac dui scelerisque, vitae semper
        elit feugiat. Aliquam faucibus metus eu iaculis sollicitudin.
        Pellentesque placerat diam id lorem ultrices interdum. Aenean metus
        sapien, varius et risus non, accumsan ornare nibh. Donec a ex nec augue
        semper interdum. Fusce quis sodales sem, in consectetur quam. Donec sed
        pretium sem, vel volutpat elit. Duis id risus turpis. Suspendisse
        venenatis nisl et turpis hendrerit, id condimentum lacus tempus. Aenean
        posuere vulputate urna, eu tempus diam eleifend sit amet. Sed eget arcu
        sem. Duis sed velit massa. Donec ex massa, mattis in laoreet at,
        eleifend quis nisi. Pellentesque fringilla sollicitudin ex ut
        scelerisque. Nam nulla ligula, dapibus et diam sodales, bibendum
        volutpat mauris. Curabitur imperdiet a tortor et faucibus. Fusce ac
        neque nisl. Proin augue justo, venenatis quis varius et, ultrices id
        felis. Duis ante metus, molestie quis convallis condimentum, facilisis
        sed purus.
      </p>
    </Box>
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
    <img src={require('../images/5e3d2-dognbone-1.jpg')} alt="hello" />
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
