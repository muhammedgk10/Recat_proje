import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1d1d1f;
  color: #fff;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #007aff;
        }
      }
    }
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #007aff;
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #a1a1a6;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Hakkımızda</h3>
          <ul>
            <li><a href="#">Biz Kimiz?</a></li>
            <li><a href="#">Kariyer</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Destek</h3>
          <ul>
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">Yardım Merkezi</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Sosyal Medya</h3>
          <SocialMediaLinks>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </SocialMediaLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; 2024 BTK Akademi. Tüm hakları saklıdır.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
