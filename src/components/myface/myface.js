import React from 'react';
import Title from 'components/title';
import { Container } from './myface.css';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";
import photo from './eden.jpg';

const Face = () => (

    <Container>
      <div className="flex">
      <img src={photo} alt="Face" style={{maxHeight:200, maxWidth:200}} className="photo"  />
      </div>
        <Title as="h2" size="large">
        Hi, I&apos;m Eden! I graduated from the University of Reading in 2020 and have been working at IBM as a visual designer ever since. 
      </Title>
      <div className="socials">
            <a href="https://www.instagram.com/edensinclair_/?hl=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size = '2x'/>
            </a>
            <a href="https://twitter.com/edensinclair_?lang=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size = '2x'/>
            </a>
      </div>
    
    
      
    </Container> 
);

export default Face;
