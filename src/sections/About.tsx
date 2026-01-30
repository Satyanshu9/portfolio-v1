import { MapPin, Calendar, Code2, Download, Cpu, Bot, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
];

const interests = [
  { icon: Cpu, label: 'Embedded Systems' },
  { icon: Bot, label: 'Robotics' },
  { icon: Radio, label: 'IoT Development' },
  { icon: Code2, label: 'Open Source' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Get to know the engineer behind the robots
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div
            className={`relative transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-background border border-border shadow-xl">
              <img
                src="/profile.jpg"
                alt="Satyanshu Bhardwaj"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold text-foreground">Satyanshu Bhardwaj</span>,
                an IoT & Robotics Engineer with hands-on experience in robotics systems, embedded
                electronics, ROS2, MoveIt, ESP32, STM32-based hardware, and full-stack robot control
                interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work sits at the intersection of hardware control, robot motion planning, real-time
                communication, and human-machine interaction, with a strong focus on practical,
                deployable systems rather than purely academic prototypes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a core member of <span className="font-medium text-foreground">NextUp Robotics Pvt Ltd</span>,
                I actively design and develop robotic systems, automation solutions, and intelligent
                embedded platforms. My experience spans from low-level microcontroller programming
                to high-level robot motion planning and simulation.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-sm font-medium mb-3">When I'm not building robots:</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm"
                  >
                    <interest.icon className="w-4 h-4" />
                    {interest.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Button className="w-full sm:w-auto" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
          <div className="text-center p-6 bg-card border border-border rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold mb-1">20+</p>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold mb-1">10+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
