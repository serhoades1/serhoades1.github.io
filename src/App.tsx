import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Phone, ChevronDown, GraduationCap, Briefcase, Code, Trophy, Languages, Send } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink active={activeSection === 'education'} onClick={() => scrollToSection('education')}>Education</NavLink>
            <NavLink active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>Experience</NavLink>
            <NavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink active={activeSection === 'leadership'} onClick={() => scrollToSection('leadership')}>Leadership</NavLink>
            <NavLink active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <div 
          className="section-bg opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="space-y-8 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent animate-fade-in">
            Stephen Rhoades
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Computer Science Student at University of Alabama
          </p>
          <div className="flex space-x-4 justify-center animate-fade-in">
            <SocialLink href="mailto:serhoades1@crimson.ua.edu" icon={<Mail />} label="Email" />
            <SocialLink href="tel:+1234567890" icon={<Phone />} label="Phone" />
            <SocialLink href="https://linkedin.com/in/stephen-rhoades" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com/serhoades1" icon={<Github />} label="GitHub" />
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<GraduationCap />} title="Education" />
          <div className="mt-8">
            <ExperienceCard 
              title="Bachelor of Science in Computer Science"
              company="The University of Alabama"
              period="Expected May 2027"
              description={
                <div className="space-y-2">
                  <p>GPA: 4.00/4.00</p>
                  <p>STEM Path to MBA Program</p>
                  <p className="text-gray-400">Relevant Coursework:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Data Structures & Algorithms</li>
                    <li>Linear Algebra</li>
                    <li>Databases</li>
                    <li>Operating Systems</li>
                    <li>Microcomputers</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Briefcase />} title="Experience" />
          <div className="mt-8 space-y-12">
            <ExperienceCard 
              title="Undergraduate Research Assistant"
              company="UA Department of Kinesiology"
              period="October 2024 - Present"
              description={
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Assisting in energy expenditure study using portable metabolic cart and accelerometers</li>
                  <li>Organizing data from 50+ wearables for machine learning model training</li>
                  <li>Utilizing ActiGraph and StepWatch for movement pattern analysis</li>
                </ul>
              }
            />
            <ExperienceCard 
              title="Computer Repair Technician"
              company="Timberland High School"
              period="August 2022 - May 2023"
              description={
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Diagnosed and repaired computer hardware/software issues</li>
                  <li>Refurbished 100+ computers, saving school $2000+</li>
                  <li>Managed computer loan program and maintenance</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Code />} title="Projects" />
          <div className="mt-8 space-y-12">
            <ExperienceCard 
              title="Cadence Tracker"
              company="Research Project"
              period="November 2024 - Present"
              description={
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Built wearable app in Kotlin for real-time cadence monitoring</li>
                    <li>Implemented step detection and cadence calculation algorithms</li>
                    <li>Designed modular UI using Compose for wearable devices</li>
                  </ul>
                  <a 
                    href="https://github.com/serhoades1/Cadence-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              }
            />
            <ExperienceCard 
              title="Dying Shot"
              company="Personal Project"
              period="August 2024 - Present"
              description={
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led 7-person team in game development using Unity and C#</li>
                  <li>Implemented player movement, enemy AI, and combat mechanics</li>
                  <li>Designed 10+ levels with strategic gameplay elements</li>
                  <li>Integrated Node.js and MongoDB for player data management</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 bg-gray-900 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Trophy />} title="Leadership" />
          <div className="mt-8 space-y-12">
            <ExperienceCard 
              title="Large Events Chair"
              company="ACM (Association for Computing Machinery)"
              period="October 2023 - Present"
              description={
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Coordinated hackathon planning with MLH and UA staff</li>
                  <li>Increased club membership by 50% through recruitment efforts</li>
                  <li>Participated in coding workshops and project development</li>
                </ul>
              }
            />
            <ExperienceCard 
              title="Officer"
              company="Triathlon Club"
              period="October 2023 - Present"
              description={
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Managed 20-30 weekly training sessions</li>
                  <li>Doubled club membership through recruitment initiatives</li>
                  <li>Competed in 3-4 races per semester</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Languages />} title="Skills & Languages" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard 
              title="Programming Languages"
              skills={['Java', 'Python', 'C', 'C++', 'C#', 'Kotlin', 'SQL', 'Assembly']}
            />
            <SkillCard 
              title="Tools"
              skills={['Git', 'GitHub', 'Jira', 'Trello', 'VS Code', 'MongoDB', 'Docker', 'Eclipse', 'Bitbucket', 'Android Studio']}
            />
            <SkillCard 
              title="Frameworks"
              skills={['Node.js', 'React', 'UTF', 'PyTorch', 'AWS']}
            />
            <SkillCard 
              title="Languages"
              skills={['English (Native)', 'Spanish (Conversational)']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 relative">
        <div 
          className="section-bg"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Send />} title="Get in Touch" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, opportunities, or just having a friendly chat about technology.
              </p>
              <div className="space-y-4">
                <ContactItem 
                  icon={<Mail className="text-red-500" />}
                  label="Email"
                  value="serhoades1@crimson.ua.edu"
                  href="mailto:serhoades1@crimson.ua.edu"
                />
                <ContactItem 
                  icon={<Linkedin className="text-red-500" />}
                  label="LinkedIn"
                  value="Connect on LinkedIn"
                  href="https://linkedin.com/in/stephen-rhoades"
                />
                <ContactItem 
                  icon={<Github className="text-red-500" />}
                  label="GitHub"
                  value="Follow on GitHub"
                  href="https://github.com/serhoades1"
                />
              </div>
            </div>
            <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-gray-800">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NavLink({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-gray-700 hover:border-red-500 hover:text-red-500 transition-colors duration-300 group"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
        {icon}
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}

function ExperienceCard({ title, company, period, description }: { 
  title: string;
  company: string;
  period: string;
  description: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 backdrop-blur-sm bg-black/30">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-red-400 mt-1">{company}</p>
      <p className="text-gray-500 text-sm mt-1">{period}</p>
      <div className="mt-4">{description}</div>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-6 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 backdrop-blur-sm bg-black/30">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 backdrop-blur-sm bg-black/30"
    >
      {icon}
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </a>
  );
}

export default App;