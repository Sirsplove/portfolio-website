import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #64ffda;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  color: #8892b0;
  line-height: 1.8;
`;

const AboutParagraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid #64ffda;
    border-radius: 10px;
    z-index: -1;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #64ffda 0%, #00d4ff 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f23;
  font-size: 1.2rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(100, 255, 218, 0.3);
`;

const About: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Git'];

  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </SectionTitle>
      
      <AboutContent>
        <AboutText>
          <AboutParagraph
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hello! I'm Splove, a passionate software engineer with a love for creating 
            beautiful, functional, and user-centered digital experiences. I enjoy building 
            software that solves real-world problems and delights users.
          </AboutParagraph>
          
          <AboutParagraph
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My journey in software development began with curiosity and has evolved into 
            a passion for clean code, thoughtful design, and continuous learning. I believe 
            in writing code that not only works but is also maintainable and scalable.
          </AboutParagraph>
          
          <AboutParagraph
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </AboutParagraph>
          
          <SkillsList
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsList>
        </AboutText>
        
        <AboutImage
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            [Profile Image Placeholder]
          </ImageContainer>
        </AboutImage>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
