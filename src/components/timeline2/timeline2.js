import React from 'react';
import { Container } from './timeline2.css';

const Timeline2 = () => (
  <Container>
    <div className="timeline">
      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Visual designer – IBM <br /> 11/20–present
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            Working primarily within the Automation space leading
            the visual design of a product and assisting with UX and UI development. {' '}
          </p>
        </div>
      </div>

      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Industry lecturer – University of Reading <br /> 09/21–present
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            I helped to run a second year app project, which involved teaching
            design thinking practices, leading feedback sessions on project work
            with small groups of students, as well as running small workshops on
            storyboarding and other design techniques.{' '}
          </p>
        </div>
      </div>

      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Editorial designer – Prior Park College <br /> 07/20–10/20
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            Worked freelance, creating an annual magazine for Prior Park College
            in Bath.{' '}
          </p>
        </div>
      </div>

      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Graphic designer – Autism Berkshire <br /> 07/20–10/20
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            Redesigned the Autism Alert cards and promotional material for
            Autism Berkshire and Thames Valley Police{' '}
          </p>
        </div>
      </div>

      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Design intern – IBM <br /> 06/19–09/19
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            Worked as a visual designer for IBM over the summer, winning an
            award: Best Technical Solution for an application I designed and
            assisted creating.{' '}
          </p>
        </div>
      </div>

      <div className="column">
        <div className="title">
          <h1>
            {' '}
            Design editor – The Spark Newspaper <br /> 01/18–01/19
          </h1>
        </div>
        <div className="description">
          <p>
            {' '}
            I managed a team of designers and lead the redesign of The Spark Newspaper. {' '}
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Timeline2;
