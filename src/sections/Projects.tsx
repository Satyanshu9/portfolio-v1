import { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Search, Filter, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'ROS2-ESP32 Servo Control',
    description: 'Real-time servo motor control system using ROS2 and ESP32 with serial communication. Features trajectory planning and joint state synchronization.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 45,
    forks: 12,
    updatedAt: '2024-12-15',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    tags: ['ROS2', 'ESP32', 'Servo Control'],
  },
  {
    name: 'MoveIt Trajectory Planner',
    description: 'C++ node for capturing planned joint trajectories, saving to YAML, and replaying with resume capability and execution tracking.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 38,
    forks: 8,
    updatedAt: '2024-11-20',
    githubUrl: 'https://github.com',
    tags: ['MoveIt', 'ROS2', 'Motion Planning'],
  },
  {
    name: 'Human-Following Robot',
    description: 'ESP32-based trolley robot using ultrasonic sensors for distance-based decision making and human following capabilities.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 52,
    forks: 15,
    updatedAt: '2024-10-05',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    tags: ['ESP32', 'Sensors', 'Automation'],
  },
  {
    name: 'LED Interactive Game System',
    description: 'WS2812B NeoPixel-based game system with animations, difficulty scaling, scoring, and mobile-friendly web UI.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 28,
    forks: 6,
    updatedAt: '2024-09-12',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    tags: ['ESP32', 'LED', 'Web UI'],
  },
  {
    name: 'Robot Web Controller',
    description: 'Full-stack robot control interface with slider-based joint input, mobile-first design, and HUD-style futuristic interface.',
    language: 'TypeScript',
    languageColor: '#2b7489',
    stars: 41,
    forks: 10,
    updatedAt: '2024-08-28',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    tags: ['React', 'WebSocket', 'UI/UX'],
  },
  {
    name: 'Voice-Controlled Robot',
    description: 'AI-powered voice control system with speech-to-text integration, predefined home positions, and ChatGPT/DeepSeek API integration.',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 35,
    forks: 7,
    updatedAt: '2024-07-15',
    githubUrl: 'https://github.com',
    tags: ['AI', 'Voice Control', 'Python'],
  },
  {
    name: 'RFID Employee Logging',
    description: 'ESP32-based employee attendance system with RFID authentication and web dashboard for real-time monitoring.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 22,
    forks: 4,
    updatedAt: '2024-06-20',
    githubUrl: 'https://github.com',
    tags: ['ESP32', 'RFID', 'IoT'],
  },
  {
    name: 'ESP-NOW Wireless Control',
    description: 'Low-latency wireless control system using ESP-NOW protocol for real-time robot command transmission.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 30,
    forks: 9,
    updatedAt: '2024-05-10',
    githubUrl: 'https://github.com',
    tags: ['ESP-NOW', 'Wireless', 'ESP32'],
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <GitFork className="w-4 h-4" />
            {project.forks}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-secondary text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.languageColor }}
          />
          <span className="text-sm text-muted-foreground">{project.language}</span>
          <span className="text-sm text-muted-foreground">
            {new Date(project.updatedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work in robotics, embedded systems, and IoT
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Search */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Button
              variant={selectedTag === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Refresh */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="flex-shrink-0"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View all projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
