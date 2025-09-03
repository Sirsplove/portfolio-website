import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #64ffda 0%, #00d4ff 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f23;
  font-size: 1.2rem;
`;

const ContactText = styled.div`
  color: #8892b0;
  
  h4 {
    color: #ffffff;
    margin-bottom: 0.3rem;
    font-size: 1rem;
  }
  
  p {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #64ffda;
    color: #0f0f23;
    transform: translateY(-3px);
    border-color: #64ffda;
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 15px;
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }
  
  &::placeholder {
    color: #8892b0;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }
  
  &::placeholder {
    color: #8892b0;
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  width: 100%;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      
      <ContactContainer>
        <ContactInfo>
          <ContactInfoTitle>Let's talk about everything!</ContactInfoTitle>
          
          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <h4>Email</h4>
              <p>hello@splove.dev</p>
            </ContactText>
          </ContactItem>
          
          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </ContactText>
          </ContactItem>
          
          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </ContactText>
          </ContactItem>
          
          <SocialLinks>
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
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              required
            />
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thank you! Your message has been sent successfully.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
