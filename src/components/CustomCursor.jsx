import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHover = () => {
      setCursorVariant('link');
    };

    const handleLinkLeave = () => {
      setCursorVariant('default');
    };

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: 'rgba(59, 130, 246, 0.3)'
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(249, 115, 22, 0.3)'
    }
  };

  return (
    <>
      <CursorRing
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
      <CursorDot
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }}
      />
    </>
  );
};

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-600);
  pointer-events: none;
  z-index: 9999;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export default CustomCursor;