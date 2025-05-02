import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Advanced React & Redux',
      organization: 'Udemy',
      date: 'March 2023',
      description: 'In-depth course covering advanced React patterns, Redux, and modern state management techniques.',
      skills: ['React', 'Redux', 'Context API', 'Hooks'],
      credentialUrl: '#'
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      organization: 'Coursera',
      date: 'September 2022',
      description: 'Comprehensive program covering both frontend and backend development with the MERN stack.',
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs'],
      credentialUrl: '#'
    },
    {
      id: 3,
      title: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      date: 'January 2023',
      description: 'Professional certification for developing and maintaining applications on the AWS platform.',
      skills: ['AWS', 'Lambda', 'S3', 'DynamoDB', 'CloudFormation'],
      credentialUrl: '#'
    },
    {
      id: 4,
      title: 'TypeScript Masterclass',
      organization: 'Frontend Masters',
      date: 'May 2023',
      description: 'Advanced TypeScript concepts, type manipulation, and design patterns for large-scale applications.',
      skills: ['TypeScript', 'Advanced Types', 'Generics', 'Type Guards'],
      credentialUrl: '#'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextCertification = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };
  
  const prevCertification = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };
  
  return (
    <CertificationsSection id="certifications">
      <CertificationsContainer>
        <SectionHeader>
          <SectionTitle>Certifications</SectionTitle>
          <Underline />
          <SectionDescription>Professional certifications and courses I've completed to stay current with industry trends.</SectionDescription>
        </SectionHeader>
        
        <CertificationsContent>
          <CarouselContainer>
            <AnimatePresence mode="wait">
              <CarouselItem
                key={certifications[activeIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <CertificationCard>
                  <IconContainer>
                    <FiAward />
                  </IconContainer>
                  
                  <CardContent>
                    <CardHeader>
                      <CardTitle>{certifications[activeIndex].title}</CardTitle>
                      <Organization>{certifications[activeIndex].organization}</Organization>
                      <DateIssued>Issued: {certifications[activeIndex].date}</DateIssued>
                    </CardHeader>
                    
                    <CardDescription>
                      {certifications[activeIndex].description}
                    </CardDescription>
                    
                    <SkillsList>
                      {certifications[activeIndex].skills.map((skill, index) => (
                        <SkillTag key={index}>{skill}</SkillTag>
                      ))}
                    </SkillsList>
                    
                    <VerifyButton href={certifications[activeIndex].credentialUrl} target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                    </VerifyButton>
                  </CardContent>
                </CertificationCard>
              </CarouselItem>
            </AnimatePresence>
            
            <NavigationControls>
              <NavButton onClick={prevCertification}>
                <FiArrowLeft />
              </NavButton>
              
              <DotsContainer>
                {certifications.map((cert, index) => (
                  <DotIndicator 
                    key={cert.id} 
                    active={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </DotsContainer>
              
              <NavButton onClick={nextCertification}>
                <FiArrowRight />
              </NavButton>
            </NavigationControls>
          </CarouselContainer>
          
          <DecorationElement>
            <DoodleDecoration>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40,40 Q100,20 160,40 T160,160 Q100,180 40,160 T40,40" stroke="var(--primary-200)" strokeWidth="2" fill="none" />
                <path d="M60,60 Q100,40 140,60 T140,140 Q100,160 60,140 T60,60" stroke="var(--primary-300)" strokeWidth="2" fill="none" />
                <path d="M80,80 Q100,60 120,80 T120,120 Q100,140 80,120 T80,80" stroke="var(--primary-400)" strokeWidth="2" fill="none" />
              </svg>
            </DoodleDecoration>
          </DecorationElement>
        </CertificationsContent>
      </CertificationsContainer>
    </CertificationsSection>
  );
};

const CertificationsSection = styled.section`
  padding: 6rem 2rem;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(20, 184, 166, 0.05);
    z-index: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
  }
`;

const CertificationsContainer = styled.div`
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

const CertificationsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 650px;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 60%;
  }
`;

const CarouselItem = styled(motion.div)`
  width: 100%;
`;

const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--neutral-50);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  font-size: 3rem;
  color: white;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 25%;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--neutral-900);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-100);
  }
`;

const Organization = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--primary-600);
  margin-bottom: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const DateIssued = styled.div`
  font-size: 0.875rem;
  color: var(--neutral-500);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--neutral-700);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-300);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--primary-100);
  color: var(--primary-700);
  border-radius: 20px;
  font-size: 0.875rem;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--primary-900);
    color: var(--primary-300);
  }
`;

const VerifyButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--primary-600);
  border: 1px solid var(--primary-600);
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary-600);
    color: white;
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
    border: 1px solid var(--primary-400);
    
    &:hover {
      background-color: var(--primary-600);
      color: white;
    }
  }
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-600);
  border: 1px solid var(--primary-200);
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-50);
    transform: translateY(-2px);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
    color: var(--primary-400);
    border: 1px solid var(--neutral-700);
    
    &:hover {
      background-color: var(--neutral-700);
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DotIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-600)' : 'var(--neutral-300)'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.active ? 'var(--primary-400)' : 'var(--neutral-600)'};
  }
`;

const DecorationElement = styled.div`
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    width: 30%;
  }
`;

const DoodleDecoration = styled.div`
  position: relative;
  
  svg {
    width: 100%;
    height: auto;
  }
  
  @media (prefers-color-scheme: dark) {
    path {
      stroke: var(--primary-900);
      
      &:nth-child(2) {
        stroke: var(--primary-800);
      }
      
      &:nth-child(3) {
        stroke: var(--primary-700);
      }
    }
  }
`;

export default Certifications;