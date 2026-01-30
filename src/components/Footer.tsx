import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:satyanshu@nextuprobotics.com', label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Satyanshu Bhardwaj. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
