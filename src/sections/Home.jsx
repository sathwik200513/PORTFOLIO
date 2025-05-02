import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';

const Home = ({ scrollPosition }) => {
  return (
    <HomeSection id="home">
      <FloatingShapes>
        <Shape1 
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 1 - (scrollPosition * 0.001) }}
        />
        <Shape2 
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 1 - (scrollPosition * 0.001) }}
        />
        <Shape3 
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 1 - (scrollPosition * 0.001) }}
        />
      </FloatingShapes>
      
      <HomeContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GreetingText>Hello, I'm</GreetingText>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MyName>Sathwik Reddy</MyName>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RoleText>
            <span>Full-Stack</span> Developer
          </RoleText>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <BriefIntro>
            I create engaging digital experiences with clean code and creative problem-solving.
          </BriefIntro>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <CTAContainer>
            <PrimaryButton href="#contact">Hire Me</PrimaryButton>
            <SecondaryButton href="#projects">View Projects</SecondaryButton>
          </CTAContainer>
        </motion.div>
      </HomeContent>
      
      <ScrollPrompt 
        to="about" 
        smooth={true} 
        duration={800}
        style={{ opacity: 1 - (scrollPosition * 0.005) }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ArrowContainer
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiArrowDown />
        </ArrowContainer>
      </ScrollPrompt>
      
      {/* Hanging decoration */}
      <HangingElement
        style={{ 
          transform: `translateY(${scrollPosition * 0.1}px)`,
          opacity: 1 - (scrollPosition * 0.001)
        }}
      >
        <HangingDecoration />
      </HangingElement>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  overflow: hidden;
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
`;

const Shape1 = styled(Shape)`
  top: 15%;
  left: 15%;
  width: 300px;
  height: 300px;
  background-color: rgba(59, 130, 246, 0.2);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 150px;
    height: 150px;
  }
`;

const Shape2 = styled(Shape)`
  top: 30%;
  right: 10%;
  width: 250px;
  height: 250px;
  background-color: rgba(249, 115, 22, 0.15);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
  }
`;

const Shape3 = styled(Shape)`
  bottom: 15%;
  left: 25%;
  width: 200px;
  height: 200px;
  background-color: rgba(20, 184, 166, 0.15);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100px;
    height: 100px;
  }
`;

const HomeContent = styled.div`
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const GreetingText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-600);
  margin-bottom: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const MyName = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--neutral-900), var(--neutral-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3rem;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, var(--neutral-100), var(--neutral-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const RoleText = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--neutral-700);
  
  span {
    color: var(--accent-600);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.75rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-300);
    
    span {
      color: var(--accent-400);
    }
  }
`;

const BriefIntro = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: var(--neutral-600);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  font-weight: 500;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(37, 99, 235, 0.4);
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(37, 99, 235, 0.4);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--primary-600);
  font-weight: 500;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-600);
  
  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
    border: 2px solid var(--primary-400);
    
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
    }
  }
`;

const ScrollPrompt = styled(Link)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: var(--neutral-500);
`;

const ArrowContainer = styled(motion.div)`
  font-size: 1.25rem;
  color: var(--primary-600);
  
  @media (prefers-color-scheme: dark) {
    color: var(--primary-400);
  }
`;

const HangingElement = styled.div`
  position: absolute;
  top: 0;
  right: 15%;
  height: 250px;
  width: 3px;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const HangingDecoration = styled.div`
  position: relative;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-400), transparent);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--primary-400), transparent 70%);
  }
`;

export default Home;