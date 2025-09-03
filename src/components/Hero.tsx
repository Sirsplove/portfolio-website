import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  z-index: 2;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: #64ffda;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #64ffda 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #8892b0;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #8892b0;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  margin-bottom: 3rem;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #64ffda;
  font-size: 1.5rem;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
  z-index: 1;
`;

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <BackgroundGradient />
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Splove
        </Name>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build things for the web
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </Description>
        
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
        >
          Get In Touch
        </CTAButton>
        
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
          <SocialLink href="mailto:hello@splove.dev">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        ↓
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
