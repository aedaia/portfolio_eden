import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';
import { Link } from "gatsby";

const Gallery = ({ items }) => (
  <Container>
    { items.map((item, i) => {
    const{link, ...props} = item
    console.log(item)
    return(
    <Link to ={link} key = {i}> 
    <Item{ ...props}/></Link>

    ) } )
    }
    
    
  </Container>
);



Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
