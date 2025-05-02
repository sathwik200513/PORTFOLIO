import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, shopping cart, and payment processing.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['web', 'frontend', 'backend']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity tool for organizing tasks, with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['web', 'frontend']
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'Interactive dashboard for tracking financial data with real-time updates and data visualization.',
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['web', 'data']
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Location-based weather forecasting app with beautiful visualizations and 7-day predictions.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['mobile', 'frontend']
    },
    {
      id: 5,
      title: 'Social Media API',
      description: 'RESTful API for social media applications with authentication, posts, and user management.',
      image: 'https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['backend', 'api']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A creative portfolio website with interactive animations and a custom content management system.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: '#',
      categories: ['web', 'frontend']
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'api', label: 'API' },
    { id: 'data', label: 'Data' }
  ];
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));
  
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionTitle>My Projects</SectionTitle>
          <Underline />
          <SectionDescription>A selection of my recent work, showcasing my skills and expertise.</SectionDescription>
        </SectionHeader>
        
        <FiltersContainer>
          <FiltersLabel>
            <FiFilter />
            <span>Filter by:</span>
          </FiltersLabel>
          
          <FiltersList>
            {filters.map(filter => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <ActiveFilterIndicator layoutId="activeFilter" />
                )}
              </FilterButton>
            ))}
          </FiltersList>
        </FiltersContainer>
        
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </ProjectLink>
                    <ProjectLink href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                      <span>Code</span>
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImageContainer>
              
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectCategories>
                  {project.categories.map(category => (
                    <CategoryTag key={category}>{category}</CategoryTag>
                  ))}
                </ProjectCategories>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--neutral-50);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(249, 115, 22, 0.05);
    z-index: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-900);
  }
`;

const ProjectsContainer = styled.div`
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

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

const FiltersLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--neutral-600);
  font-size: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const FiltersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`;

const FilterButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary-50)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-600)' : 'var(--neutral-600)'};
  border: 1px solid ${props => props.active ? 'var(--primary-200)' : 'var(--neutral-300)'};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: ${props => props.active ? '500' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-50)' : 'var(--neutral-100)'};
    transform: translateY(-2px);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.active ? 'var(--primary-900)' : 'transparent'};
    color: ${props => props.active ? 'var(--primary-400)' : 'var(--neutral-400)'};
    border: 1px solid ${props => props.active ? 'var(--primary-700)' : 'var(--neutral-700)'};
    
    &:hover {
      background-color: ${props => props.active ? 'var(--primary-900)' : 'var(--neutral-800)'};
    }
  }
`;

const ActiveFilterIndicator = styled(motion.div)`
  position: absolute;
  bottom: -3px;
  left: 25%;
  right: 25%;
  height: 2px;
  background: var(--primary-500);
  border-radius: 1px;
  
  @media (prefers-color-scheme: dark) {
    background: var(--primary-400);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--neutral-800);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    
    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    > div {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: var(--neutral-900);
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-500);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--neutral-900);
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-100);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--neutral-600);
  line-height: 1.5;
  margin-bottom: 1.25rem;
  
  @media (prefers-color-scheme: dark) {
    color: var(--neutral-400);
  }
`;

const ProjectCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background-color: var(--primary-50);
  color: var(--primary-700);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--primary-900);
    color: var(--primary-300);
  }
`;

export default Projects;