import React from 'react';
import Title from 'components/title';
import { Container } from './myface.css';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";

const Face = () => (

    <Container>
      <Title as="h2" size="large">
        Hi, I&apos;m Eden! I graduated from the University of Reading in <span> 2020</span> and have been working at IBM as a visual designer ever since. 
      </Title>
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

export default Face;
