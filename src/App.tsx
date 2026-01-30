import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';
import { useTheme } from '@/hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent flash of wrong theme
  useEffect(() => {
    if (mounted) {
      document.body.style.opacity = '1';
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
