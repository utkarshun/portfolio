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
    skills: ["React", "Angular JS", "Node.js", "Express.js", "Flask", "Spring Boot"],
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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono animate-gradient-text font-bold mb-2">{"<skills>"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, DevOps automation, and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card interactive-card p-6 transition-all duration-500 group animate-in zoom-in-95"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 text-foreground rounded-full text-sm font-mono hover:bg-gradient-vibrant hover:text-white hover:scale-110 hover:border-transparent transition-all duration-300 cursor-default shadow-[0_0_10px_hsl(var(--primary)/0.1)] hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono animate-gradient-text font-bold text-center mt-12">{"</skills>"}</p>
      </div>
    </section>
  );
};

export default SkillsSection;
