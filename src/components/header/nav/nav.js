import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/aboutme">About</Link>
      </li>
      <li>
        <Link to="/">Work</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
