import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #64ffda 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(15, 15, 35, 0.98);
    flex-direction: column;
    padding: 2rem 0;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  }
`;

const NavLink = styled.li`
  button {
    color: #8892b0;
    transition: color 0.3s ease;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.span<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background: #64ffda;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(15, 15, 35, 0.98)' : 'rgba(15, 15, 35, 0.95)'
      }}
    >
      <Nav>
        <Logo>Splove</Logo>
        
        <NavLinks isOpen={isOpen}>
          <NavLink><button onClick={() => scrollToSection('about')}>About</button></NavLink>
          <NavLink><button onClick={() => scrollToSection('skills')}>Skills</button></NavLink>
          <NavLink><button onClick={() => scrollToSection('projects')}>Projects</button></NavLink>
          <NavLink><button onClick={() => scrollToSection('experience')}>Experience</button></NavLink>
          <NavLink><button onClick={() => scrollToSection('contact')}>Contact</button></NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <MenuLine isOpen={isOpen} />
          <MenuLine isOpen={isOpen} />
          <MenuLine isOpen={isOpen} />
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
