import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#646cff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const currentlyExploring = [
    { name: 'Vite', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg' },
    { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
    { name: 'Godot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/godot/godot-original.svg' },
    { name: 'Go', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
    { name: 'R', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg' }
  ]

  const languages = [
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' }
  ]

  const tools = [
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
    { name: 'Dart', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg' },
    { name: 'R', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg' },
    { name: 'Tailwind', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md px-8 py-4 flex justify-between items-center z-50 shadow-lg border-b border-indigo-500/20">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Jeffin Basil
        </div>
        <ul className="flex gap-8 list-none">
          <li><a href="#home" onClick={() => setActiveSection('home')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Home</a></li>
          <li><a href="#about" onClick={() => setActiveSection('about')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">About</a></li>
          <li><a href="#exploring" onClick={() => setActiveSection('exploring')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Exploring</a></li>
          <li><a href="#skills" onClick={() => setActiveSection('skills')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Skills</a></li>
          <li><a href="#contact" onClick={() => setActiveSection('contact')} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section with Three.js Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
          </Canvas>
        </div>
        <div className="relative z-10 max-w-4xl animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 animate-slide-up">
            Hi 👋, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Jeffin Basil</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Enthusiast, builder, and lifelong learner — creating, experimenting, and sharing along the way.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a href="#exploring" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
              What I'm Learning
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all">
              Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-7xl mx-auto bg-gradient-to-br from-indigo-500/5 to-purple-600/5">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          <p className="text-gray-300">
            I'm an enthusiast, builder, and lifelong learner — creating, experimenting, and sharing along the way.
            With a passion for exploring new technologies and frameworks, I'm constantly pushing the boundaries
            of what's possible in software development.
          </p>
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section id="exploring" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          🌱 Currently Exploring
        </h2>
        <p className="text-center text-gray-400 mb-12">Technologies and frameworks I'm actively learning</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {currentlyExploring.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 transition-all group">
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Languages Section */}
      <section id="skills" className="py-20 px-8 max-w-7xl mx-auto bg-gradient-to-br from-indigo-500/5 to-purple-600/5">
        <h2 className="text-5xl font-bold text-center mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          Top Languages
        </h2>
        <p className="text-center text-gray-400 mb-12">Programming languages I work with</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 transition-all group">
              <img src={lang.icon} alt={lang.name} className="w-16 h-16 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 font-medium">{lang.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 relative">
          Languages & Tools
        </h2>
        <p className="text-center text-gray-400 mb-12">Frameworks, libraries, and tools in my toolkit</p>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-12 h-12 hover:scale-125 transition-transform cursor-pointer" 
                title={tool.name}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
          Connect with Me
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Let's collaborate and build something amazing together!
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://linkedin.com/in/jeffin-basil" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all group">
            <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-300">LinkedIn</span>
          </a>
          <a href="https://instagram.com/jeff_clicks_75" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all group">
            <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-300">Instagram</span>
          </a>
          <a href="https://pin.it/7s2yyXpLb" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all group">
            <img src="https://img.icons8.com/fluency/48/pinterest.png" alt="Pinterest" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-300">Pinterest</span>
          </a>
          <a href="mailto:jeffinbasil@gmail.com" className="flex flex-col items-center gap-3 px-8 py-6 bg-gray-800/60 rounded-xl border border-indigo-500/20 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all group">
            <img src="https://img.icons8.com/fluency/48/gmail.png" alt="Gmail" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-300">Email</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-800/80 text-gray-400 border-t border-indigo-500/20">
        <p>&copy; 2025 Jeffin Basil. Built with React, Vite, Tailwind CSS & Three.js</p>
      </footer>
    </div>
  )
}

export default Home
