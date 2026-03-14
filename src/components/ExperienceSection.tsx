import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Leadics",
    period: "Mar 2026 – Present",
    type: "Remote",
    description: [
      "Assisting in the development of full-stack enterprise applications using Angular and Java.",
      "Building a multi-page customer data management interface with CSV parsing and real-time data grid rendering.",
      "Implementing dynamic routing and detailed customer profile views to streamline data accessibility.",
    ],
  },
  {
    title: "Red Hat Intern",
    company: "Red Hat",
    period: "Dec 2024 – Jan 2025",
    type: "Remote",
    description: [
      "Deployed and managed full-stack applications on RHEL and OpenShift, cutting release cycle time by 25%",
      "Automated monitoring pipelines with Bash scripts, reducing manual server checks by 40%",
      "Performed Linux system hardening and container security audits",
      "Implemented secure CI/CD pipelines with Ansible, Docker, and OpenShift",
    ],
  },
  {
    title: "Placement Volunteer",
    company: "RNS Institute of Technology",
    period: "2024 – Present",
    description: [
      "Coordinated campus placement drives attended by 500+ students",
      "Conducted workshops on secure coding and cybersecurity interview preparation",
      "Mentored peers on penetration testing and security best practices",
      "Organized CTF competitions and knowledge-sharing sessions",
    ],
  },
];

const education = {
  degree: "B.E. in Computer Science & Engineering",
  specialization: "Cybersecurity",
  institution: "RNS Institute of Technology, Bangalore",
  period: "2022 – 2026",
  cgpa: "8.5 / 10",
};

const certifications = [
  "Ethical Hacking (Advanced)",
  "Linux Security (EC-Council)",
  "Docker & Kubernetes (Udemy)",
  "Introduction to Cybersecurity (Cisco)",
  "AWS Cloud Security — FutureSkills Prime",
  "Python 5★ (HackerRank)",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2">{"/* Experience */"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey So Far</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card p-6 border-l-4 border-l-primary hover:border-l-accent transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {exp.company} {exp.type && `• ${exp.type}`}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-accent">
                <h4 className="font-bold text-lg mb-1">{education.degree}</h4>
                <p className="text-accent text-sm mb-2">
                  Specialization: {education.specialization}
                </p>
                <p className="text-muted-foreground text-sm">{education.institution}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="text-xs font-mono bg-secondary px-3 py-1 rounded">
                    {education.period}
                  </span>
                  <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="glass-card p-6">
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <div className="glass-card interactive-card-subtle p-6 border border-primary/30 glow-border group">
                <div className="flex items-center gap-4">
                  <span className="text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-transform">🏆</span>
                  <div>
                    <p className="font-bold animate-gradient-text text-xl mb-1">1st Prize Winner</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">College Tech Expo for GPS Spoofing Mitigation Research Project</p>
                  </div>
                </div>
              </div>

              <div className="glass-card interactive-card-subtle p-6 border border-accent/20 hover:border-accent/40 group">
                <div className="flex items-center gap-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">💻</span>
                  <div>
                    <p className="font-bold text-accent text-xl mb-1">200+ DSA Problems</p>
                    <p className="text-muted-foreground text-sm">Solved on LeetCode optimizing for performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
