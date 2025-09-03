import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaTools, 
  FaPalette,
  FaServer
} from 'react-icons/fa';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #64ffda 0%, #00d4ff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f23;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: #8892b0;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '▹';
    color: #64ffda;
    font-size: 1.2rem;
  }
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: #64ffda;
  font-size: 0.9rem;
  margin-left: auto;
`;

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Intermediate' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' }
      ]
    },
    {
      title: 'Database & ORM',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'Mongoose', level: 'Advanced' },
        { name: 'Prisma', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: [
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'CI/CD', level: 'Intermediate' },
        { name: 'Vercel', level: 'Advanced' },
        { name: 'Netlify', level: 'Intermediate' }
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: <FaTools />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
        { name: 'Figma', level: 'Intermediate' },
        { name: 'Jira', level: 'Intermediate' }
      ]
    },
    {
      title: 'Design & UX',
      icon: <FaPalette />,
      skills: [
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'UI/UX Principles', level: 'Intermediate' },
        { name: 'Styled Components', level: 'Advanced' },
        { name: 'Framer Motion', level: 'Intermediate' },
        { name: 'Accessibility', level: 'Intermediate' }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </SectionTitle>
      
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CategoryHeader>
              <CategoryIcon>
                {category.icon}
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}</SkillLevel>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
