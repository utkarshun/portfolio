import { Github, Linkedin, Mail, Code2, ExternalLink, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0 bg-background" />
      
      {/* Vibrant Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-500 shadow-[0_0_30px_hsl(var(--primary)/0.2)] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
              <img
                src={profilePhoto}
                alt="Utkarsh Kher"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-card border border-primary/50 shadow-lg rounded-lg px-3 py-1.5 font-mono text-sm text-primary">
              <span className="animate-pulse">●</span> Open to work
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="font-mono text-primary mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello World, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="animate-gradient-text">Utkarsh Kher</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Full-Stack Developer & <span className="animate-gradient-text font-bold text-transparent bg-clip-text bg-gradient-vibrant">Security Specialist</span>
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
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-100 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
              <div className="relative group">
                <button
                  className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </button>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-card border border-primary/20 rounded-lg shadow-xl overflow-hidden flex flex-col">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1gdvgiNWsH9sWWRSe4AOU0GWE4ut3MA-y"
                      className="px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      SDE Resume
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1teVfGRbKBMkTFjmBUl-e6p8q9qHHxgvL"
                      className="px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Cybersecurity Resume
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 border border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 hover:shadow-[0_0_15px_hsl(var(--accent)/0.2)] hover:-translate-y-1 transition-all"
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
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/utkarshkher"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://leetcode.com/u/utkarshkher"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kherutkarsh54@gmail.com"
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
