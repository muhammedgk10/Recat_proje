import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCalendarAlt, FaBlog, FaInfoCircle } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: bold;
  color: #007aff;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007aff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">BTK Akademi</Logo>
      <Nav>
        <NavLink to="/courses"><FaGraduationCap />Eğitimler</NavLink>
        <NavLink to="/events"><FaCalendarAlt />Etkinlikler</NavLink>
        <NavLink to="/blog"><FaBlog />Blog</NavLink>
        <NavLink to="/about"><FaInfoCircle />Hakkımızda</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
