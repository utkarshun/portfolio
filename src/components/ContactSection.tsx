import { Mail, Phone, Github, Linkedin, Code2, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2">{">> contact()"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or potential collaborations in full-stack development and cybersecurity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <a
                  href="mailto:kherutkarsh54@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">kherutkarsh54@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916205052231"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91-6205052231</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-secondary rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                
                <a
                  href="https://github.com/utkarshun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  <span className="font-medium group-hover:text-primary">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/utkarshkher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  <span className="font-medium group-hover:text-primary">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/utkarshkher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                >
                  <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  <span className="font-medium group-hover:text-primary">LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Designed & Built by Utkarsh Kher
            <span className="text-primary">/&gt;</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">© 2024 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
