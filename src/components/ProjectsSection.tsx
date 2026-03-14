import { Github, ExternalLink, Shield, Bot, Navigation, Network } from "lucide-react";

const projects = [
  {
    title: "Event Ticket Platform",
    description: "Engineered a ticketing platform with QR code generation and validation, reducing ticket fraud by 90%. Features role-based authentication and handles 5K+ tickets with sub-second response.",
    tech: ["Spring Boot", "PostgreSQL", "QR Code", "REST API"],
    icon: Shield,
    github: "https://github.com/utkarshun/Event-Ticket-Platform",
    highlights: ["90% fraud reduction", "5K+ tickets", "Sub-second response"],
  },
  {
    title: "GPT Voice Assistant",
    description: "Developed a GPT-powered voice assistant with speech recognition and NLP for task automation. Integrated notifications, reminders, and app-launching features improving productivity by 30%.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    icon: Bot,
    github: "https://github.com/utkarshun/ai-assistant",
    highlights: ["30% productivity boost", "Voice recognition", "Cross-session recall"],
  },
  {
    title: "GPS Spoofing Research",
    description: "Simulated GPS spoofing attacks on automotive systems by generating fake NMEA signals, highlighting navigation vulnerabilities. Proposed detection mechanisms with 40% improved accuracy.",
    tech: ["Python", "Kali Linux", "NMEA", "Metasploit"],
    icon: Navigation,
    highlights: ["40% detection improvement", "Security research", "Mitigation strategies"],
  },
  {
    title: "TalentLens Platform",
    description: "Built an AI-powered secure online assessment platform with authentication, protected workflows, and automated evaluation. Integrated AI-based suspicious activity detection.",
    tech: ["React", "Spring Boot", "PostgreSQL", "AI"],
    icon: Shield,
    highlights: ["AI Suspicious Activity Detection", "Secure Workflows", "Automated Evaluation"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2">{"// Featured Work"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development and security expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
