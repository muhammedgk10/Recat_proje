import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 0;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 8rem 2rem;
  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background-color: #007aff;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>BTK Akademi'ye Hoş Geldiniz</HeroTitle>
        <HeroSubtitle>Geleceğinize yön verecek eğitimler burada!</HeroSubtitle>
        <CTAButton to="/courses">Eğitimleri Keşfet</CTAButton>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
