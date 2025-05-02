import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  const contactInfo = [
    { id: 'email', icon: <FiMail />, title: 'Email', value: 'sathwikmarch2005@gmail.com', link: 'mailto:sathwikmarch2005@gmail.com' },
    { id: 'phone', icon: <FiPhone />, title: 'Phone', value: '+91 6304990760', link: 'tel:+916304990760' },
    { id: 'address', icon: <FiMapPin />, title: 'Address', value: 'Sangareddy, Telegana', link: 'https://maps.google.com/?q=San+Francisco' }
  ];
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <Underline />
          <SectionDescription>Have a project in mind or want to work together? Feel free to reach out!</SectionDescription>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfoColumn>
            <ContactIntro>
              <ContactGreeting>Let's talk about your project!</ContactGreeting>
              <ContactMessage>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </ContactMessage>
            </ContactIntro>
            
            <ContactDetails>
              {contactInfo.map(item => (
                <ContactInfoItem 
                  key={item.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconContainer>{item.icon}</IconContainer>
                  <ContactInfoContent>
                    <ContactInfoTitle>{item.title}</ContactInfoTitle>
                    <ContactInfoValue href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </ContactInfoValue>
                  </ContactInfoContent>
                </ContactInfoItem>
              ))}
            </ContactDetails>
            
            <DoodleDecoration>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,100 Q50,50 100,100 T180,100" stroke="var(--primary-200)" strokeWidth="2" fill="none" />
                <path d="M20,120 Q50,70 100,120 T180,120" stroke="var(--primary-300)" strokeWidth="2" fill="none" />
                <path d="M20,140 Q50,90 100,140 T180,140" stroke="var(--primary-400)" strokeWidth="2" fill="none" />
              </svg>
            </DoodleDecoration>
          </ContactInfoColumn>
          
          <ContactFormColumn>
            <FormContainer>
              {isSubmitted ? (
                <ThankYouMessage>
                  <CheckIconContainer>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    >
                      <FiCheck />
                    </motion.div>
                  </CheckIconContainer>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you soon!</p>
                </ThankYouMessage>
              ) : (
                <ContactForm onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      error={errors.subject}
                    />
                    {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      error={errors.message}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                  </FormGroup>
                  
                  <SubmitButton 
                    type="submit" 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <SpinnerContainer>
                        <Spinner />
                        <span>Sending...</span>
                      </SpinnerContainer>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message</span>
                      </>
                    )}    
                  </SubmitButton>
                </ContactForm>
              )}
            </FormContainer>
          </ContactFormColumn>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.1), transparent 70%);
    z-index: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-100);
  }
`;

const Underline = styled.div`
  height: 4px;
  width: 60px;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
  margin: 0 auto 1.5rem;
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--neutral-600);
  max-width: 600px;
  margin: 0 auto;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactInfoColumn = styled.div`
  width: 100%;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 45%;
  }
`;

const ContactIntro = styled.div`
  margin-bottom: 3rem;
`;

const ContactGreeting = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--primary-600);
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const ContactMessage = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--neutral-700);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-300);
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-500));
  color: white;
  font-size: 1.25rem;
`;

const ContactInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--neutral-800);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const ContactInfoValue = styled.a`
  font-size: 1rem;
  color: var(--neutral-600);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-600);
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
    
    &:hover {
      color: var(--primary-400);
    }
  }
`;

const DoodleDecoration = styled.div`
  opacity: 0.7;
  margin-top: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
  
  @media (prefers-color-scheme: dark) {
    opacity: 0.4;
    
    path {
      stroke: var(--primary-700);
      
      &:nth-child(2) {
        stroke: var(--primary-600);
      }
      
      &:nth-child(3) {
        stroke: var(--primary-500);
      }
    }
  }
`;

const ContactFormColumn = styled.div`
  width: 100%;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 50%;
  }
`;

const FormContainer = styled.div`
  background-color: var(--neutral-50);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-700);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-300);
  }
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? 'var(--error-500)' : 'var(--neutral-300)'};
  border-radius: 8px;
  font-size: 1rem;
  color: var(--neutral-900);
  background-color: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
    border: 1px solid ${props => props.error ? 'var(--error-500)' : 'var(--neutral-700)'};
    color: var(--neutral-100);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? 'var(--error-500)' : 'var(--neutral-300)'};
  border-radius: 8px;
  font-size: 1rem;
  color: var(--neutral-900);
  background-color: white;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
    border: 1px solid ${props => props.error ? 'var(--error-500)' : 'var(--neutral-700)'};
    color: var(--neutral-100);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: var(--error-500);
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ThankYouMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
  
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--neutral-900);
    margin: 1.5rem 0 1rem;
    
    @media (prefers-color-scheme: dark) {
      color: var(--neutral-100);
    }
  }
  
  p {
    font-size: 1.125rem;
    color: var(--neutral-600);
    line-height: 1.6;
    max-width: 400px;
    
    @media (prefers-color-scheme: dark) {
      color: var(--neutral-400);
    }
  }
`;

const CheckIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--success-500), var(--success-600));
  color: white;
  font-size: 2rem;
`;

export default Contact;