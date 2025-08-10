import React, { useEffect, useState } from 'react';
import { Award, Star, Zap, Eye } from 'lucide-react';

const Certifications = () => {
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

    const section = document.getElementById('certifications');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: 'AWS CLOUD WARRIOR',
      subtitle: 'AWS Certified Cloud Practitioner',
      file: 'AWS_Certified_Cloud_Practitioner_certificate.pdf',
      type: 'pdf',
      color: 'bg-orange-600',
      delay: 0
    },
    {
      title: 'DEVTOWN CHAMPION',
      subtitle: 'Development Excellence',
      file: 'Devtown.pdf',
      type: 'pdf',
      color: 'bg-blue-600',
      delay: 200
    },
    {
      title: 'DIGITAL HERO',
      subtitle: 'DT Achievement',
      file: 'DT.png',
      type: 'image',
      color: 'bg-green-600',
      delay: 400
    },
    {
      title: 'HACKFROST LEGEND',
      subtitle: 'Hackathon Victory',
      file: 'hackfrost.pdf',
      type: 'pdf',
      color: 'bg-purple-600',
      delay: 600
    },
    {
      title: 'ORACLE MASTER',
      subtitle: 'Oracle Certification',
      file: 'oracle_Certificate.pdf',
      type: 'pdf',
      color: 'bg-red-600',
      delay: 800
    },
    {
      title: 'DESIGN MASTER',
      subtitle: 'UI/UX Design Training',
      file: 'UI_UX_Design_Training.pdf',
      type: 'pdf',
      color: 'bg-pink-600',
      delay: 1000
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-green-500 relative overflow-hidden">
      {/* Comic Panel Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(black 3px, transparent 3px),
            linear-gradient(90deg, black 3px, transparent 3px)
          `,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      {/* Comic Action Words Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 border-4 border-black rounded-full opacity-20 animate-pulse flex items-center justify-center">
          <span className="font-black text-black text-lg">CERTIFIED!</span>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-400 border-4 border-black rounded-full opacity-20 animate-bounce flex items-center justify-center">
          <span className="font-black text-black">HERO!</span>
        </div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-400 border-4 border-black rounded-full opacity-20 animate-ping flex items-center justify-center">
          <span className="font-black text-black text-sm">EPIC!</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <div className="bg-yellow-400 text-black px-8 py-4 border-6 border-black transform -rotate-2 shadow-2xl">
              <h2 className="text-6xl font-black">HERO BADGES</h2>
            </div>
            {/* Comic explosion */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-600 border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
              <Award className="text-white" size={32} />
            </div>
          </div>
          <div className="bg-white border-4 border-black px-6 py-3 inline-block transform rotate-1 shadow-xl">
            <p className="text-xl text-black font-black">
              BEHOLD MY LEGENDARY ACHIEVEMENTS AND CERTIFICATIONS!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${cert.delay}ms` }}
            >
              <div className="bg-white border-6 border-black overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
                {/* Certificate Header */}
                <div className={`${cert.color} p-4 relative`}>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white border-3 border-black rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Award className="text-black" size={24} />
                    </div>
                    <div className="flex space-x-1">
                      <Star className="text-yellow-400 animate-pulse" size={20} />
                      <Star className="text-yellow-400 animate-pulse" size={20} />
                      <Star className="text-yellow-400 animate-pulse" size={20} />
                    </div>
                  </div>
                  
                  {/* Comic halftone overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '8px 8px'
                  }}></div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className={`${cert.color} text-white px-4 py-2 border-3 border-black font-black text-lg mb-2 inline-block transform -rotate-1 shadow-lg`}>
                      {cert.title}
                    </div>
                    <p className="text-black font-bold text-sm bg-yellow-100 border-2 border-black px-3 py-1 inline-block transform rotate-1">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Certificate Preview */}
                  <div className="bg-gray-100 border-4 border-black h-32 mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-yellow-100 transition-colors duration-300">
                    {cert.type === 'image' ? (
                      <img
                        src={`/certificates/${cert.file}`}
                        alt={cert.title}
                        className="object-contain max-h-28 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 border-3 border-black rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          <Eye className="text-white" size={24} />
                        </div>
                        <span className="font-black text-black">PDF CERTIFICATE</span>
                      </div>
                    )}
                    
                    {/* Comic shading lines */}
                    <div className="absolute inset-0 opacity-10" style={{
                      background: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 10px)`
                    }}></div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={`/certificates/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full bg-blue-600 text-white border-4 border-black px-4 py-3 font-black text-lg hover:bg-blue-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-xl">
                      <span className="flex items-center justify-center space-x-2">
                        <Zap size={20} />
                        <span>VIEW {cert.type === 'pdf' ? 'CERTIFICATE' : 'BADGE'}!</span>
                      </span>
                    </button>
                  </a>
                </div>

                {/* Comic "VERIFIED" Badge */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-green-600 border-4 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse shadow-xl">
                  <span className="text-white font-black text-xs">VERIFIED!</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white border-6 border-black p-8 shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-600 text-white px-6 py-3 border-3 border-black font-black text-3xl mb-8 inline-block transform -rotate-1 shadow-xl">
              ACHIEVEMENT UNLOCKED!
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-yellow-400 border-4 border-black p-4 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-black mb-2">{certificates.length}</div>
                <div className="font-black text-black">CERTIFICATES</div>
              </div>
              <div className="text-center bg-green-600 border-4 border-black p-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="font-black text-white">VERIFIED</div>
              </div>
              <div className="text-center bg-blue-600 border-4 border-black p-4 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">5+</div>
                <div className="font-black text-white">PLATFORMS</div>
              </div>
              <div className="text-center bg-red-600 border-4 border-black p-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">∞</div>
                <div className="font-black text-white">LEARNING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white border-6 border-black p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-2xl mx-auto">
            <div className="bg-red-600 text-white px-6 py-3 border-3 border-black font-black text-2xl mb-4 inline-block transform rotate-1 shadow-xl">
              WANT TO SEE MORE?
            </div>
            <p className="text-black font-bold mb-4">
              THESE CERTIFICATIONS REPRESENT MY CONTINUOUS JOURNEY OF LEARNING AND MASTERING NEW TECHNOLOGIES!
            </p>
            <div className="text-6xl mb-4">🏆</div>
            <div className="bg-yellow-400 text-black px-4 py-2 border-2 border-black font-black inline-block transform -rotate-1">
              "EVERY CERTIFICATE IS A NEW SUPERPOWER UNLOCKED!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;