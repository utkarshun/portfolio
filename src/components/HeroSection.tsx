import { Github, Linkedin, Mail, Code2, ExternalLink, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img
                src={profilePhoto}
                alt="Utkarsh Kher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-card border border-primary/50 rounded-lg px-3 py-1.5 font-mono text-sm text-primary">
              <span className="animate-pulse">●</span> Open to work
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="font-mono text-primary mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello World, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-gradient">Utkarsh Kher</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Full-Stack Developer & <span className="text-accent">Security Specialist</span>
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Building scalable applications and securing digital infrastructure. 
              Skilled in React, Node.js, Spring Boot, and penetration testing.
              Passionate about DevSecOps and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/resume/UTKARSH_SDE.pdf"
                download
                className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://github.com/utkarshun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/utkarshkher"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/utkarshkher"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="mailto:kherutkarsh54@gmail.com"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
