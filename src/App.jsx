import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Modern e-commerce platform with payment integration',
      tech: ['React', 'TypeScript', 'Stripe'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Mobile-first portfolio website with animations',
      tech: ['React', 'CSS3', 'Vite'],
      link: '#'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Vite', 'VS Code', 'Figma'] }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md px-8 py-4 flex justify-between items-center z-50 shadow-lg border-b border-indigo-500/20">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          FALLEN-01
        </div>
        <ul className="flex gap-8 list-none">
          <li><a href="#home" onClick={() => setActiveSection('home')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Home</a></li>
          <li><a href="#about" onClick={() => setActiveSection('about')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">About</a></li>
          <li><a href="#projects" onClick={() => setActiveSection('projects')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Projects</a></li>
          <li><a href="#skills" onClick={() => setActiveSection('skills')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Skills</a></li>
          <li><a href="#contact" onClick={() => setActiveSection('contact')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-8 bg-gradient-to-br from-indigo-500/10 to-purple-600/10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">FALLEN-01</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-xl mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            I build exceptional digital experiences that make a difference
          </p>
          <div className="flex gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed space-y-6">
          <p>
            I'm a passionate developer with a love for creating elegant solutions to complex problems.
            With expertise in modern web technologies, I specialize in building responsive, user-friendly
            applications that deliver real value.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-7xl mx-auto bg-indigo-500/5">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/80 p-8 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/30 transition-all">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-indigo-400 font-semibold hover:translate-x-1 inline-block transition-transform">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800/60 p-8 rounded-xl border border-indigo-500/20">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3 list-none p-0">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="py-2 border-b border-gray-700/50 last:border-0">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 max-w-7xl mx-auto bg-indigo-500/5 text-center">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="mailto:your.email@example.com" className="flex flex-col items-center gap-2 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
            <span className="text-4xl">✉️</span>
            <span className="font-medium">Email</span>
          </a>
          <a href="https://github.com/FALLEN-01" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
            <span className="text-4xl">🔗</span>
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
            <span className="text-4xl">💼</span>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-800/80 text-gray-400">
        <p>&copy; 2025 FALLEN-01. Built with React, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
