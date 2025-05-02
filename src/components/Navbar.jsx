import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-nav')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  
  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'certifications', 'projects', 'contact'];
    
    const sectionOffsets = sections.map(section => {
      const element = document.getElementById(section);
      return {
        id: section,
        offset: element ? element.offsetTop - 100 : 0
      };
    });
    
    const currentSection = sectionOffsets.reduce((acc, section) => {
      return scrollPosition >= section.offset ? section.id : acc;
    }, sections[0]);
    
    setActiveSection(currentSection);
  }, [scrollPosition]);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <Header isScrolled={scrollPosition > 50}>
      <NavContainer>
        <Logo to="home" smooth={true} duration={500}>
          <LogoText>Sathwik</LogoText>
        </Logo>
        
        <DesktopNav>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onClick={() => setActiveSection(item.id)}
                  isActive={activeSection === item.id}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <ActiveIndicator
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </DesktopNav>
        
        <MobileMenuButton onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
        
        <AnimatePresence>
          {isOpen && (
            <MobileNav
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <MobileNavList>
                {navItems.map((item) => (
                  <MobileNavItem key={item.id}>
                    <MobileNavLink
                      to={item.id}
                      smooth={true}
                      duration={500}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      isActive={activeSection === item.id}
                    >
                      {item.label}
                    </MobileNavLink>
                  </MobileNavItem>
                ))}
              </MobileNavList>
            </MobileNav>
          )}
        </AnimatePresence>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${props => props.isScrolled ? '0.75rem 0' : '1.5rem 0'};
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.isScrolled ? 'rgba(23, 23, 23, 0.8)' : 'transparent'};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  cursor: pointer;
`;

const LogoText = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, var(--primary-600), var(--accent-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.isActive ? 'var(--primary-600)' : 'var(--neutral-700)'};
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-600);
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.isActive ? 'var(--primary-400)' : 'var(--neutral-300)'};
    
    &:hover {
      color: var(--primary-400);
    }
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
  border-radius: 1px;
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--neutral-800);
  cursor: pointer;
  z-index: 110;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 5rem 2rem 2rem;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavItem = styled.li``;

const MobileNavLink = styled(Link)`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.isActive ? 'var(--primary-600)' : 'var(--neutral-700)'};
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--neutral-200);
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.isActive ? 'var(--primary-400)' : 'var(--neutral-300)'};
    border-bottom: 1px solid var(--neutral-700);
  }
`;

export default Navbar;