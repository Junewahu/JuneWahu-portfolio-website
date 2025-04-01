:root {
    /* Soft Feminine Color Palette */
    --primary: #ff85a2; /* Soft Pink */
    --secondary: #a18cd1; /* Lavender */
    --accent: #fbc2eb; /* Blush Pink */
    --background: #fff9fb; /* Very light pink */
    --text: #5a4a6a; /* Deep purple-gray */
    --text-light: #a38fb9; /* Soft purple */
  
    /* Dark Mode Variables */
    --dark-primary: #f8a5c2; /* Soft Pink */
    --dark-secondary: #b8a1e8; /* Light Lavender */
    --dark-accent: #ffcce6; /* Light Blush */
    --dark-background: #1a1423; /* Deep purple */
    --dark-text: #e2d9f3; /* Light lavender */
    --dark-text-light: #c1b3d9;
  
    /* Glassmorphism Effects */
    --glass-bg: rgba(255, 255, 255, 0.3);
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-shadow: 0 8px 32px 0 rgba(255, 133, 162, 0.2);
  
    /* Dark Glassmorphism */
    --dark-glass-bg: rgba(42, 33, 61, 0.4);
    --dark-glass-border: rgba(255, 255, 255, 0.1);
  
    /* Other Variables */
    --border-radius: 16px;
    --border-radius-lg: 24px;
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    --transition-slow: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    --shadow: 0 4px 20px rgba(255, 133, 162, 0.1);
    --shadow-lg: 0 15px 30px rgba(255, 133, 162, 0.15);
    --header-height: 80px;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  color: var(--text);
  background-color: var(--background);
  transition: var(--transition-slow);
  overflow-x: hidden;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.2rem;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
  }
  
  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
  }
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  
  /* Paragraphs */
  p {
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  /* Links */
  a {
    text-decoration: none;
    color: var(--primary);
    transition: var(--transition);
  }
  
  a:hover {
    color: var(--secondary);
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  section {
    padding: 6rem 0;
    position: relative;
  }
  
  @media (max-width: 768px) {
    section {
      padding: 4rem 0;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    border: 2px solid transparent;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  
  .btn:hover::before {
    opacity: 1;
  }
  
  .btn-primary {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: 0 4px 15px rgba(255, 133, 162, 0.4);
  }
  
  .btn-primary:hover {
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 133, 162, 0.6);
  }
  
  .btn-outline {
    border-color: var(--primary);
    color: var(--primary);
    background-color: transparent;
  }
  
  .btn-outline:hover {
    color: var(--white);
    border-color: var(--secondary);
    background-color: var(--secondary);
  }

  .glassmorphism {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: var(--border-radius);
    border: 1px solid var(--glass-border);
    box-shadow: var(--shadow);
    transition: var(--transition);
  }
  
  .glassmorphism:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  
    .about-cards,
    .about-timeline,
    .about-skills,
    .testimonials {
      grid-column: span 1;
    }
  }
  
  @media (max-width: 768px) {
    .timeline {
      padding-left: 20px;
    }
  
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
  
    .hero-buttons {
      justify-content: center;
    }
  
    .hero-image {
      margin-top: 3rem;
    }
  
    .footer-content {
      grid-template-columns: 1fr 1fr;
    }
  }

  .footer {
    background-color: var(--white);
    padding: 4rem 0 0;
    position: relative;
  }
  
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    z-index: 1;
  }
  
  .footer-content {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  .footer-links h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--text);
  }
  
  .footer-links ul {
    list-style: none;
  }
  
  .footer-links li {
    margin-bottom: 0.8rem;
  }
  
  .footer-links a {
    color: var(--text-light);
    transition: var(--transition);
  }
  
  .footer-links a:hover {
    color: var(--primary);
    padding-left: 5px;
  }