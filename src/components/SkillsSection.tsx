import { Code, Database, Shield, Cloud, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "Bash", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: Terminal,
    skills: ["React", "Node.js", "Express.js", "Flask", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQL"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "OpenShift", "AWS"],
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Nessus", "OWASP"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "Linux", "REST APIs", "Microservices", "Ansible", "Jenkins"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2">{"<skills>"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, DevOps automation, and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-primary text-center mt-12">{"</skills>"}</p>
      </div>
    </section>
  );
};

export default SkillsSection;
