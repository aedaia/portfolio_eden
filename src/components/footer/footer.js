import React from 'react';
import Title from 'components/title';
import { Container } from './footer.css';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";

const Footer = () => (

    <Container>
            <div>
            <Link to="https://www.instagram.com/edensinclair_/?hl=en" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size = '2x'/>
            </Link>
            <Link to="https://twitter.com/edensinclair_?lang=en" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size = '2x'/>
            </Link>
            </div>
      
    </Container> 
);

export default Footer;
