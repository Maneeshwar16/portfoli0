import React, { useEffect, useState } from 'react';
import { User, MapPin, GraduationCap, Heart } from 'lucide-react';

const About = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-yellow-400 relative overflow-hidden">
      {/* Comic Panel Border */}
      <div className="absolute inset-4 border-8 border-black rounded-3xl opacity-20"></div>
      
      {/* Comic Halftone Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="bg-red-600 text-white px-8 py-4 border-6 border-black transform -rotate-2 shadow-2xl">
              <h2 className="text-6xl font-black">ORIGIN STORY</h2>
            </div>
            {/* Comic burst */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 border-4 border-black rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-black text-lg">!</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Comic Character */}
          <div className={`text-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative inline-block">
              {/* Main character circle */}
              <div className="w-80 h-80 bg-blue-600 border-8 border-black rounded-full flex items-center justify-center shadow-2xl mx-auto relative overflow-hidden">
                <User size={120} className="text-white" />
                {/* Comic shading lines */}
                <div className="absolute inset-0" style={{
                  background: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)`
                }}></div>
              </div>
              
              {/* Comic effect bubbles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center animate-pulse shadow-xl">
                <span className="text-black font-black text-2xl">POW!</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-600 border-4 border-black rounded-full flex items-center justify-center animate-bounce shadow-xl">
                <Heart size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Comic Info Panels */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white border-4 border-black p-6 shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 border-3 border-black rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div className="bg-red-600 text-white px-4 py-2 border-2 border-black font-black">
                  WHO AM I?
                </div>
              </div>
              <p className="text-black font-bold leading-relaxed">
                I'm MANEESHWAR, a passionate full-stack developer studying at VIT-AP! 
                I love creating digital experiences that combine creativity with cutting-edge technology. 
                My journey in tech is driven by curiosity and a desire to build solutions that make a difference!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-600 border-3 border-black rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="bg-yellow-400 text-black px-4 py-2 border-2 border-black font-black">
                  TRAINING ACADEMY
                </div>
              </div>
              <p className="text-black font-bold leading-relaxed">
                Currently training at the prestigious Vellore Institute of Technology - AP Campus, 
                where I'm constantly learning and growing my superpowers in technology and computer science!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 border-3 border-black rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 border-2 border-black font-black">
                  SECRET BASE
                </div>
              </div>
              <p className="text-black font-bold leading-relaxed">
                Operating from my secret base in Amaravati, Andhra Pradesh, India. 
                Ready for remote missions and collaborations from around the globe!
              </p>
            </div>

            {/* Comic Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-blue-600 border-4 border-black p-4 text-white shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                <div className="text-3xl font-black">10+</div>
                <div className="font-bold">MISSIONS</div>
              </div>
              <div className="text-center bg-red-600 border-4 border-black p-4 text-white shadow-xl transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-black">3+</div>
                <div className="font-bold">YEARS</div>
              </div>
              <div className="text-center bg-green-600 border-4 border-black p-4 text-white shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                <div className="text-3xl font-black">24/7</div>
                <div className="font-bold">TRAINING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;