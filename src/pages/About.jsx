import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Hakkımızda</AboutTitle>
      <p>BTK Akademi hakkında bilgiler burada yer alacak.</p>
    </AboutContainer>
  );
};

export default About;
