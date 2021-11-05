import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import HeaderBlack from 'components/headerBlack';
import GlobalStyle from 'global.css.js';


const LayoutBlack = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <HeaderBlack title={data.site.siteMetadata.siteTitle} />
    {children}        
  </div>
);

LayoutBlack.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutBlackWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutBlackQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <LayoutBlack data={data} {...props} />}
  />
);

LayoutBlackWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBlackWithQuery;
