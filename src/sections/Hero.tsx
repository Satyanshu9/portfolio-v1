import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const roles = [
  'IoT & ROBOTICS ENGINEER',
  'ROS2 DEVELOPER',
  'EMBEDDED SYSTEMS EXPERT',
  'FULL-STACK ROBOTICS',
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:satyanshu@example.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Hero() {
  const { currentText } = useTypingEffect(roles, 100, 50, 2000);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(var(--foreground) / 0.15)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsl(var(--foreground) / ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <p className="text-muted-foreground text-lg sm:text-xl mb-4 tracking-widest uppercase animate-fade-in">
          Satyanshu Bhardwaj,
        </p>

        {/* Typing Effect */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[1.2em]">
          <span className="text-gradient">{currentText}</span>
          <span className="typing-cursor text-foreground">|</span>
        </h1>

        {/* Tagline */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2">
          SPECIALIZING IN ROBOTICS SYSTEMS, EMBEDDED ELECTRONICS, ROS2, MOVEIT,
          AND FULL-STACK ROBOT CONTROL INTERFACES. BUILDING REAL-WORLD DEPLOYABLE
          SYSTEMS AT THE INTERSECTION OF HARDWARE AND SOFTWARE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up stagger-3">
          <Button
            size="lg"
            className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollToSection('#projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[160px]"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up stagger-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll down</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
