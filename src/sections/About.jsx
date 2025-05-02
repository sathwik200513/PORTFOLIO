import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi';

const About = () => {
  const skills = [
    { id: 'frontend', icon: <FiLayout />, title: 'Frontend Development', description: 'Creating beautiful, responsive user interfaces with React, HTML, CSS, and JavaScript.' },
    { id: 'backend', icon: <FiServer />, title: 'Backend Development', description: 'Building robust server-side applications using Node.js, Express, and MongoDB.' },
    { id: 'tools', icon: <FiTool />, title: 'Development Tools', description: 'Proficient with Git, Docker, CI/CD pipelines, and modern development workflows.' },
    { id: 'languages', icon: <FiCode />, title: 'Programming Languages', description: 'Expertise in JavaScript, TypeScript, Python, and exploring new technologies.' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionHeader>
          <SectionTitle>About Me</SectionTitle>
          <Underline />
        </SectionHeader>
        
        <ContentWrapper>
          <AboutContent>
            <ProfileImageContainer>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProfileImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Doe" />
                <ImageDecorator />
              </motion.div>
              <PolaroidDecoration />
            </ProfileImageContainer>
            
            <AboutInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Greeting>Nice to meet you!</Greeting>
                <AboutText>
                  I'm a passionate <Highlight>Full-Stack Developer</Highlight> with 5+ years of experience building web applications. My journey in tech started when I built my first website at 14, and I've been hooked ever since.
                </AboutText>
                <AboutText>
                  I specialize in creating responsive, user-friendly interfaces and robust backend systems. My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also provide exceptional user experiences.
                </AboutText>
                <AboutText>
                  When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes.
                </AboutText>
              </motion.div>
              
              <StatsContainer>
                <StatItem>
                  <StatCount>5+</StatCount>
                  <StatLabel>Years Experience</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatCount>50+</StatCount>
                  <StatLabel>Projects</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatCount>20+</StatCount>
                  <StatLabel>Happy Clients</StatLabel>
                </StatItem>
              </StatsContainer>
            </AboutInfo>
          </AboutContent>
          
          <SkillsSection>
            <SkillsHeader>
              <SectionSubtitle>My Skills</SectionSubtitle>
            </SkillsHeader>
            
            <SkillsGrid
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <SkillCard key={skill.id} variants={itemVariants}>
                  <IconContainer>
                    {skill.icon}
                  </IconContainer>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillsSection>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--neutral-50);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.07), transparent 70%);
    z-index: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  margin: 0 auto;
  border-radius: 2px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 40%;
    margin: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  position: relative;
  z-index: 2;
`;

const ImageDecorator = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-500);
  border-radius: 20px;
  z-index: 1;
`;

const PolaroidDecoration = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background-color: var(--accent-100);
  border-radius: 10px;
  transform: rotate(-10deg);
  z-index: 0;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--accent-900);
  }
`;

const AboutInfo = styled.div`
  flex: 1;
`;

const Greeting = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--neutral-800);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--neutral-700);
  margin-bottom: 1.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-300);
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: var(--primary-600);
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  background-color: var(--neutral-100);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
  }
`;

const StatItem = styled.div`
  flex: 1;
  text-align: center;
`;

const StatCount = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-600);
  margin-bottom: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--neutral-600);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background-color: var(--neutral-300);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-700);
  }
`;

const SkillsSection = styled.div`
  margin-top: 2rem;
`;

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--neutral-800);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
    
    &:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: var(--primary-600);
  margin-bottom: 1.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const SkillTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--neutral-800);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  color: var(--neutral-600);
  line-height: 1.5;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

export default About;