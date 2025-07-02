import React, { useEffect, useState } from 'react';
import { Code2, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'FRONTEND',
      color: 'bg-blue-600',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      delay: 0
    },
    {
      icon: Database,
      title: 'BACKEND',
      color: 'bg-green-600',
      skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Express'],
      delay: 200
    },
    {
      icon: Smartphone,
      title: 'MOBILE',
      color: 'bg-purple-600',
      skills: ['React Native', 'Flutter',  'Android', 'Kotlin' ,'Loading....'],
      delay: 400
    },
    {
      icon: Globe,
      title: 'WEB TECH',
      color: 'bg-red-600',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Loading....'],
      delay: 600
    },
    {
      icon: Palette,
      title: 'DESIGN',
      color: 'bg-pink-600',
      skills: ['Figma',  'UI/UX', 'Photoshop', 'Loading....'],
      delay: 800
    },
    {
      icon: Zap,
      title: 'TOOLS',
      color: 'bg-yellow-600',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel'],
      delay: 1000
    }
  ];

  return (
    <section id="skills" className="py-20 bg-red-500 relative overflow-hidden">
      {/* Comic Panel Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <div className="bg-yellow-400 text-black px-8 py-4 border-6 border-black transform rotate-2 shadow-2xl">
              <h2 className="text-6xl font-black">SUPER POWERS</h2>
            </div>
            {/* Comic explosion */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-black font-black text-lg">BOOM!</span>
            </div>
          </div>
          <div className="bg-white border-4 border-black px-6 py-3 inline-block transform -rotate-1 shadow-xl">
            <p className="text-xl text-black font-black">
              THESE ARE THE TECHNOLOGIES I USE TO SAVE THE DAY!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${category.delay}ms` }}
              >
                <div className="bg-white border-6 border-black p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2">
                  {/* Comic Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${category.color} border-4 border-black rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className={`${category.color} text-white px-4 py-2 border-3 border-black font-black text-lg transform -rotate-3 shadow-lg`}>
                      {category.title}
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="bg-yellow-400 border-3 border-black p-3 font-black text-black hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 hover:-rotate-1 shadow-lg"
                        data-skill={skill}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-black rounded-full"></div>
                          <span>{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Power Level */}
                  <div className="mt-6 text-center">
                    <div className="bg-red-600 text-white px-4 py-2 border-3 border-black font-black shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      POWER LEVEL: MAXIMUM!
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comic Stats Panel */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white border-6 border-black p-8 shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-600 text-white px-6 py-3 border-3 border-black font-black text-3xl mb-8 inline-block transform -rotate-1 shadow-xl">
              HERO STATISTICS
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-yellow-400 border-4 border-black p-4 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-black mb-2">500+</div>
                <div className="font-black text-black">HOURS CODING</div>
              </div>
              <div className="text-center bg-green-600 border-4 border-black p-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">50+</div>
                <div className="font-black text-white">COMMITS</div>
              </div>
              <div className="text-center bg-purple-600 border-4 border-black p-4 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">15+</div>
                <div className="font-black text-white">TECHNOLOGIES</div>
              </div>
              <div className="text-center bg-red-600 border-4 border-black p-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">∞</div>
                <div className="font-black text-white">LEARNING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;