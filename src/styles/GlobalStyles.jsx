import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    --secondary-50: #f0fdfa;
    --secondary-100: #ccfbf1;
    --secondary-200: #99f6e4;
    --secondary-300: #5eead4;
    --secondary-400: #2dd4bf;
    --secondary-500: #14b8a6;
    --secondary-600: #0d9488;
    --secondary-700: #0f766e;
    --secondary-800: #115e59;
    --secondary-900: #134e4a;
    
    --accent-50: #fff7ed;
    --accent-100: #ffedd5;
    --accent-200: #fed7aa;
    --accent-300: #fdba74;
    --accent-400: #fb923c;
    --accent-500: #f97316;
    --accent-600: #ea580c;
    --accent-700: #c2410c;
    --accent-800: #9a3412;
    --accent-900: #7c2d12;
    
    --success-50: #f0fdf4;
    --success-100: #dcfce7;
    --success-200: #bbf7d0;
    --success-300: #86efac;
    --success-400: #4ade80;
    --success-500: #22c55e;
    --success-600: #16a34a;
    --success-700: #15803d;
    --success-800: #166534;
    --success-900: #14532d;
    
    --warning-50: #fffbeb;
    --warning-100: #fef3c7;
    --warning-200: #fde68a;
    --warning-300: #fcd34d;
    --warning-400: #fbbf24;
    --warning-500: #f59e0b;
    --warning-600: #d97706;
    --warning-700: #b45309;
    --warning-800: #92400e;
    --warning-900: #78350f;
    
    --error-50: #fef2f2;
    --error-100: #fee2e2;
    --error-200: #fecaca;
    --error-300: #fca5a5;
    --error-400: #f87171;
    --error-500: #ef4444;
    --error-600: #dc2626;
    --error-700: #b91c1c;
    --error-800: #991b1b;
    --error-900: #7f1d1d;
    
    --neutral-50: #fafafa;
    --neutral-100: #f5f5f5;
    --neutral-200: #e5e5e5;
    --neutral-300: #d4d4d4;
    --neutral-400: #a3a3a3;
    --neutral-500: #737373;
    --neutral-600: #525252;
    --neutral-700: #404040;
    --neutral-800: #262626;
    --neutral-900: #171717;
    
    --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    font-family: var(--font-sans);
    line-height: 1.5;
    font-weight: 400;
    
    color-scheme: light dark;
    color: var(--neutral-900);
    background-color: var(--neutral-50);
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  a {
    font-weight: 500;
    color: var(--primary-600);
    text-decoration: none;
    transition: color 0.25s ease;
  }
  
  a:hover {
    color: var(--primary-800);
  }
  
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--primary-600);
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  
  button:hover {
    background-color: var(--primary-700);
  }
  
  button:focus,
  button:focus-visible {
    outline: 4px auto var(--primary-500);
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ::selection {
    background-color: var(--primary-200);
    color: var(--primary-900);
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      color: var(--neutral-100);
      background-color: var(--neutral-900);
    }
    a:hover {
      color: var(--primary-400);
    }
    ::selection {
      background-color: var(--primary-800);
      color: var(--primary-100);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;