import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI EXPENSE GUARDIAN',
      description:
        'A POWERFUL full-stack expense tracker built with Flask, React, and Redis. Equipped with JWT shields for secure access, AI warriors to auto-categorize expenses, and dashboards that UNMASK spending villains in real time! Supports multi-payment apps and conquers PDF/Excel files with ease!',
      tags: ['Flask', 'React', 'Redis', 'JWT', 'Vercel', 'Render'],
      image:
        '/ai_expense_tracker.png',
      color: 'bg-green-600',
      delay: 0,
      demo: 'https://expense-tracker-lake-sigma.vercel.app/',
      code: 'https://github.com/sai16-hub/expense-tracker'
    },
    {
  title: 'DIGITAL DESK',
  description: 'An interactive full-stack Todo and workspace app with a React + Vite frontend and Node.js + Express backend. Packed with JWT-based authentication, CRUD-based todo management, drag-and-drop task interface, real-time updates, and a stylish responsive design via Tailwind & Framer Motion.',
  tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'Framer Motion'],
  image: '/digital desk.png',
  color: 'bg-purple-600',
  delay: 0,
  demo: 'https://digital-desk.vercel.app/',
  code: 'https://github.com/Maneeshwar16/digital-desk'

}
  ]

  return (
    <section id="projects" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Comic Panel Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(black 3px, transparent 3px),
              linear-gradient(90deg, black 3px, transparent 3px)
            `,
            backgroundSize: '150px 150px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative inline-block mb-6">
            <div className="bg-yellow-400 text-black px-8 py-4 border-6 border-black transform -rotate-2 shadow-2xl">
              <h2 className="text-6xl font-black">EPIC MISSIONS</h2>
            </div>
            {/* Comic action words */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 border-4 border-black rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-black text-sm">CRASH!</span>
            </div>
          </div>
          <div className="bg-white border-4 border-black px-6 py-3 inline-block transform rotate-1 shadow-xl">
            <p className="text-xl text-black font-black">
              BEHOLD! THE LEGENDARY PROJECTS I'VE CONQUERED!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${project.delay}ms` }}
            >
              <div className="bg-gray-800 border-6 border-black overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay with Icons */}
                  <div
                    className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="flex space-x-4">
                      <button
                        onClick={() => window.open(project.demo, '_blank')}
                        className="w-16 h-16 bg-white border-4 border-black rounded-full text-black hover:scale-125 transition-transform duration-300 flex items-center justify-center font-black"
                      >
                        <Eye size={24} />
                      </button>
                      <button
                        onClick={() => window.open(project.code, '_blank')}
                        className="w-16 h-16 bg-white border-4 border-black rounded-full text-black hover:scale-125 transition-transform duration-300 flex items-center justify-center font-black"
                      >
                        <Github size={24} />
                      </button>
                      <button className="w-16 h-16 bg-white border-4 border-black rounded-full text-black hover:scale-125 transition-transform duration-300 flex items-center justify-center font-black">
                        <ExternalLink size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`${project.color} text-white px-4 py-2 border-3 border-black font-black text-lg transform -rotate-1 shadow-lg`}
                    >
                      {project.title}
                    </div>
                    <div className="w-12 h-12 bg-yellow-400 border-3 border-black rounded-full flex items-center justify-center transform rotate-12">
                      <Code size={20} className="text-black" />
                    </div>
                  </div>

                  <p className="text-white font-bold leading-relaxed mb-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-yellow-400 border-2 border-black px-3 py-1 text-black font-black text-sm hover:scale-110 transition-transform duration-300 cursor-pointer transform hover:-rotate-3 shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-blue-600 text-white border-4 border-black px-4 py-3 font-black hover:bg-blue-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-xl"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Eye size={16} />
                        <span>WITNESS!</span>
                      </span>
                    </button>
                    <button
                      onClick={() => window.open(project.code, '_blank')}
                      className="flex-1 bg-white text-black border-4 border-black px-4 py-3 font-black hover:bg-gray-100 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-xl"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Github size={16} />
                        <span>CODE!</span>
                      </span>
                    </button>
                  </div>
                </div>

                {/* "NEW" Badge */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-red-600 border-4 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse shadow-xl">
                  <span className="text-white font-black text-sm">NEW!</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white border-6 border-black p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-red-600 text-white px-6 py-3 border-3 border-black font-black text-3xl mb-4 inline-block transform rotate-1 shadow-xl">
              WANT MORE ADVENTURES?
            </div>
            <p className="text-black font-bold mb-6 max-w-2xl mx-auto text-lg">
              VENTURE INTO MY GITHUB FORTRESS FOR MORE LEGENDARY PROJECTS AND
              CONTRIBUTIONS TO THE OPEN-SOURCE UNIVERSE!
            </p>
            <button
              onClick={() =>
                window.open('https://github.com/sai16-hub', '_blank')
              }
              className="bg-yellow-400 text-black border-4 border-black px-8 py-4 font-black text-xl hover:bg-yellow-300 transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center space-x-2">
                <Github size={24} />
                <span>ENTER THE FORTRESS!</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
