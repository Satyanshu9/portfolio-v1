import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              SB
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center gap-2"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-lg"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute top-16 left-0 right-0 p-4">
          <div className="bg-card border border-border rounded-xl shadow-lg p-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
