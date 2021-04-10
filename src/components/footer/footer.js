import React from 'react';
import Title from 'components/title';
import { Container } from './footer.css';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";

const Footer = () => (

    <Container>
            <div>
            <a href="https://www.instagram.com/edensinclair_/?hl=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size = '2x'/>
            </a>
            <a href="https://twitter.com/edensinclair_?lang=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size = '2x'/>
            </a>
            </div>
      
    </Container> 
);

export default Footer;
