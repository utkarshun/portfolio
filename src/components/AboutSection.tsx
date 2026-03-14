import { Shield, Code2, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Building scalable apps with React, Node.js, and Spring Boot",
  },
  {
    icon: Shield,
    title: "Security Focus",
    description: "Penetration testing, vulnerability assessment, and DevSecOps",
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "200+ DSA problems solved, optimizing for performance",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono animate-gradient-text font-bold mb-2">{"// About Me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a <span className="text-foreground font-medium">Full-Stack Developer</span> and 
              <span className="text-accent font-medium"> Cybersecurity specialist</span> pursuing 
              B.E. in Computer Science with a specialization in Cybersecurity at RNS Institute of Technology.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With hands-on experience as a <span className="text-primary">Red Hat Intern</span>, 
              I've worked on deploying containerized applications, implementing secure CI/CD pipelines, 
              and performing system hardening and security audits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building secure, scalable applications and bridging the gap between 
              development and security through DevSecOps practices. When I'm not coding, you'll find me 
              solving DSA problems on LeetCode or exploring the latest in penetration testing techniques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg bg-secondary/50 interactive-card-subtle transition-all duration-300 group"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
