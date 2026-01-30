import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: string;
  progress: number;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Robotics & ROS',
    description: 'Robot operating system and motion planning',
    skills: [
      { name: 'ROS2', level: 'Advanced', progress: 90, color: '#22314E' },
      { name: 'MoveIt', level: 'Advanced', progress: 85, color: '#4A90A4' },
      { name: 'Gazebo', level: 'Advanced', progress: 80, color: '#5C6BC0' },
      { name: 'ros2_control', level: 'Advanced', progress: 85, color: '#7E57C2' },
      { name: 'URDF/Xacro', level: 'Expert', progress: 95, color: '#26A69A' },
    ],
  },
  {
    title: 'Embedded Systems',
    description: 'Microcontrollers and hardware programming',
    skills: [
      { name: 'ESP32', level: 'Expert', progress: 95, color: '#E7352C' },
      { name: 'Arduino', level: 'Expert', progress: 95, color: '#00979D' },
      { name: 'ESP32-S3', level: 'Advanced', progress: 85, color: '#FF6B35' },
      { name: 'STM32', level: 'Intermediate', progress: 70, color: '#03234B' },
      { name: 'PCA9685', level: 'Advanced', progress: 80, color: '#00BCD4' },
      { name: 'BTS7960', level: 'Advanced', progress: 75, color: '#FF5722' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core programming and scripting languages',
    skills: [
      { name: 'C++', level: 'Advanced', progress: 90, color: '#00599C' },
      { name: 'Python', level: 'Advanced', progress: 85, color: '#3776AB' },
      { name: 'Arduino C++', level: 'Expert', progress: 95, color: '#00979D' },
      { name: 'JavaScript', level: 'Advanced', progress: 80, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Communication Protocols',
    description: 'Serial and wireless communication',
    skills: [
      { name: 'UART/Serial', level: 'Expert', progress: 95, color: '#FF9800' },
      { name: 'ESP-NOW', level: 'Advanced', progress: 85, color: '#E7352C' },
      { name: 'Wi-Fi', level: 'Advanced', progress: 80, color: '#1DA1F2' },
      { name: 'libserial', level: 'Advanced', progress: 75, color: '#6C757D' },
    ],
  },
  {
    title: 'Web & UI Development',
    description: 'Frontend and robot control interfaces',
    skills: [
      { name: 'HTML/CSS', level: 'Advanced', progress: 85, color: '#E34F26' },
      { name: 'JavaScript', level: 'Advanced', progress: 80, color: '#F7DF1E' },
      { name: 'React', level: 'Intermediate', progress: 70, color: '#61DAFB' },
      { name: 'Mobile-First UI', level: 'Advanced', progress: 85, color: '#00C853' },
    ],
  },
  {
    title: 'AI & Computer Vision',
    description: 'Artificial intelligence integration',
    skills: [
      { name: 'ChatGPT API', level: 'Advanced', progress: 80, color: '#10A37F' },
      { name: 'DeepSeek API', level: 'Intermediate', progress: 65, color: '#4A90D9' },
      { name: 'Vision Pipelines', level: 'Intermediate', progress: 70, color: '#FF6F00' },
      { name: 'Speech-to-Text', level: 'Advanced', progress: 75, color: '#4285F4' },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-5 bg-card border border-border rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Skill Icon/Name */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-foreground">{skill.name}</h4>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden mb-3">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.progress}%` : '0%',
            backgroundColor: skill.color,
            transitionDelay: `${index * 50 + 200}ms`,
          }}
        />
      </div>

      {/* Level */}
      <p className="text-xs text-muted-foreground text-right">{skill.level}</p>
    </div>
  );
}

function SkillCategorySection({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${categoryIndex * 100}ms` }}
    >
      {/* Category Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.title}</h3>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-secondary/30"
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
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across robotics,
            embedded systems, and software development
          </p>
        </div>

        {/* Skill Categories */}
        {skillCategories.map((category, index) => (
          <SkillCategorySection
            key={category.title}
            category={category}
            categoryIndex={index}
          />
        ))}
      </div>
    </section>
  );
}
