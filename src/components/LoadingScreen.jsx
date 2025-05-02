import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <LoadingWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingContent>
        <LogoContainer>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity
            }}
          >
            <Logo>S</Logo>
          </motion.div>
        </LogoContainer>
        
        <LoadingBar>
          <LoadingProgress 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </LoadingBar>
        
        <LoadingText>Loading My Portfolio...</LoadingText>
      </LoadingContent>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--neutral-900);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-600), var(--accent-500));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: var(--neutral-700);
  border-radius: 2px;
  overflow: hidden;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
`;

const LoadingText = styled.p`
  color: var(--neutral-300);
  font-size: 1rem;
  letter-spacing: 1px;
`;

export default LoadingScreen;