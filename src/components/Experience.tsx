import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ExperienceColumn = styled.div``;

const ColumnTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(100, 255, 218, 0.3);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 60px;
  
  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #64ffda;
    border-radius: 50%;
    border: 3px solid #0f0f23;
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateX(5px);
  }
`;

const TimelineTitle = styled.h4`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TimelineCompany = styled.p`
  color: #64ffda;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const TimelinePeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TimelineTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(100, 255, 218, 0.3);
`;

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      tech: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.',
      tech: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Git']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      period: '2018 - 2020',
      location: 'New York, NY',
      description: 'Developed responsive websites and web applications for various clients. Focused on creating engaging user experiences and optimizing performance.',
      tech: ['JavaScript', 'React', 'CSS3', 'HTML5', 'jQuery']
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      period: '2014 - 2018',
      location: 'Boston, MA',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development. Completed capstone project on machine learning applications.',
      tech: ['Computer Science', 'Software Engineering', 'Web Development', 'Machine Learning']
    },
    {
      title: 'Web Development Bootcamp',
      company: 'Code Academy',
      period: '2018',
      location: 'Online',
      description: 'Intensive 12-week program covering full-stack web development technologies and best practices.',
      tech: ['Full Stack Development', 'JavaScript', 'Node.js', 'React', 'MongoDB']
    }
  ];

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </SectionTitle>
      
      <ExperienceContainer>
        <ExperienceColumn>
          <ColumnTitle>
            <FaBriefcase />
            Work Experience
          </ColumnTitle>
          
          <Timeline>
            {workExperience.map((experience, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineContent>
                  <TimelineTitle>{experience.title}</TimelineTitle>
                  <TimelineCompany>{experience.company}</TimelineCompany>
                  
                  <TimelinePeriod>
                    <FaCalendarAlt />
                    {experience.period}
                  </TimelinePeriod>
                  
                  <TimelineLocation>
                    <FaMapMarkerAlt />
                    {experience.location}
                  </TimelineLocation>
                  
                  <TimelineDescription>{experience.description}</TimelineDescription>
                  
                  <TimelineTech>
                    {experience.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TimelineTech>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ExperienceColumn>
        
        <ExperienceColumn>
          <ColumnTitle>
            <FaGraduationCap />
            Education
          </ColumnTitle>
          
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineContent>
                  <TimelineTitle>{edu.title}</TimelineTitle>
                  <TimelineCompany>{edu.company}</TimelineCompany>
                  
                  <TimelinePeriod>
                    <FaCalendarAlt />
                    {edu.period}
                  </TimelinePeriod>
                  
                  <TimelineLocation>
                    <FaMapMarkerAlt />
                    {edu.location}
                  </TimelineLocation>
                  
                  <TimelineDescription>{edu.description}</TimelineDescription>
                  
                  <TimelineTech>
                    {edu.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TimelineTech>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ExperienceColumn>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
