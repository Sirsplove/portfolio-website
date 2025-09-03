import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(15, 15, 35, 0.95);
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  padding: 3rem 20px 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled(motion.p)`
  color: #8892b0;
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #64ffda;
    color: #0f0f23;
    transform: translateY(-3px);
    border-color: #64ffda;
  }
`;

const Copyright = styled(motion.div)`
  color: #8892b0;
  font-size: 0.9rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  padding-top: 2rem;
  
  a {
    color: #64ffda;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffffff;
    }
  }
`;

const HeartIcon = styled.span`
  color: #ff6b6b;
  animation: heartbeat 1.5s ease-in-out infinite;
  
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Thanks for visiting! I'm always open to discussing new opportunities, 
          interesting projects, or just having a friendly chat about technology.
        </FooterText>
        
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        
        <Copyright
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © {currentYear} Splove. Built with <HeartIcon><FaHeart /></HeartIcon> using{' '}
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> and{' '}
          <a href="https://styled-components.com" target="_blank" rel="noopener noreferrer">Styled Components</a>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
