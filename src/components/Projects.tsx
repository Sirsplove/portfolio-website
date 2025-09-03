import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #64ffda 0%, #00d4ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f23;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 15, 35, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 2px solid #64ffda;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #64ffda;
    color: #0f0f23;
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(100, 255, 218, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #64ffda;
  color: #64ffda;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.',
      image: 'E-Commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Socket.io, and PostgreSQL.',
      image: 'Task Management App',
      tech: ['React', 'Socket.io', 'PostgreSQL', 'Node.js', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts for multiple cities. Features include location search, weather maps, and historical data visualization.',
      image: 'Weather Dashboard',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components. Features smooth animations, dark theme, and mobile-first design.',
      image: 'Portfolio Website',
      tech: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard. Built with Next.js, Prisma, and PostgreSQL.',
      image: 'Blog Platform',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities. Built with React, Socket.io, and Node.js.',
      image: 'Chat Application',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filteredProjects = projects;

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectImage>
              {project.image}
              <ProjectOverlay>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectOverlay>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectLinks>
                <ProjectButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  Code
                </ProjectButton>
                <ProjectButton href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                  Live Demo
                </ProjectButton>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
