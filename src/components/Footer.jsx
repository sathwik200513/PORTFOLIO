import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { id: 'github', icon: <FiGithub />, url: 'https://github.com' },
    { id: 'linkedin', icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { id: 'twitter', icon: <FiTwitter />, url: 'https://twitter.com' },
    { id: 'email', icon: <FiMail />, url: 'mailto:example@example.com' }
  ];
  
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <LogoSection>
            <FooterLogo>Portfolio</FooterLogo>
            <Tagline>Crafting digital experiences that matter</Tagline>
          </LogoSection>
          
          <LinksSection>
            <LinkColumn>
              <LinkTitle>Navigation</LinkTitle>
              <LinkList>
                <LinkItem><Link href="#home">Home</Link></LinkItem>
                <LinkItem><Link href="#about">About</Link></LinkItem>
                <LinkItem><Link href="#certifications">Certifications</Link></LinkItem>
                <LinkItem><Link href="#projects">Projects</Link></LinkItem>
                <LinkItem><Link href="#contact">Contact</Link></LinkItem>
              </LinkList>
            </LinkColumn>
            
            <LinkColumn>
              <LinkTitle>Contact</LinkTitle>
              <LinkList>
                <LinkItem><InfoLink href="tel:+1234567890">+1 (234) 567-890</InfoLink></LinkItem>
                <LinkItem><InfoLink href="mailto:example@example.com">example@example.com</InfoLink></LinkItem>
                <LinkItem>San Francisco, CA</LinkItem>
              </LinkList>
            </LinkColumn>
          </LinksSection>
        </TopSection>
        
        <Divider />
        
        <BottomSection>
          <Copyright>© {currentYear} Portfolio. All rights reserved.</Copyright>
          
          <SocialLinks>
            {socialLinks.map(link => (
              <SocialLink key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.div>
              </SocialLink>
            ))}
          </SocialLinks>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--neutral-100);
  padding: 4rem 0 2rem;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  max-width: 300px;
`;

const FooterLogo = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--primary-600), var(--accent-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Tagline = styled.p`
  color: var(--neutral-600);
  font-size: 1rem;
  margin-bottom: 0;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const LinkColumn = styled.div`
  min-width: 160px;
`;

const LinkTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--neutral-800);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-200);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: var(--neutral-600);
  text-decoration: none;
  transition: color 0.2s ease;
  
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

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--neutral-200);
  margin: 2rem 0;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-700);
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: var(--neutral-500);
  font-size: 0.875rem;
  margin: 0;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-500);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--neutral-600);
  font-size: 1.25rem;
  transition: color 0.2s ease;
  
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

export default Footer;