import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden border-t-8 border-yellow-400">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 border-4 border-yellow-400 rounded-full opacity-20 animate-pulse flex items-center justify-center">
          <span className="text-yellow-400 font-black">POW!</span>
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-600 border-4 border-yellow-400 rounded-full opacity-20 animate-bounce flex items-center justify-center">
          <span className="text-yellow-400 font-black text-sm">BAM!</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center">
          {/* Comic Logo */}
          <div className="mb-8">
            <div className="bg-red-600 text-white px-8 py-4 border-4 border-yellow-400 inline-block transform -rotate-2 shadow-xl">
              <h3 className="text-4xl font-black">MANEESHWAR</h3>
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 border-2 border-black font-black mt-4 inline-block transform rotate-1">
              FULL STACK HERO • VIT-AP ACADEMY
            </div>
          </div>

          {/* Made with love section */}
          <div className="bg-white border-4 border-black p-6 inline-block mb-6 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center space-x-3 text-black font-black">
              <span>CRAFTED WITH</span>
              <div className="w-8 h-8 bg-red-600 border-2 border-black rounded-full flex items-center justify-center">
                <Heart className="text-white animate-pulse" size={16} />
              </div>
              <span>AND</span>
              <div className="w-8 h-8 bg-blue-600 border-2 border-black rounded-full flex items-center justify-center">
                <Code className="text-white" size={16} />
              </div>
              <span>AND LOTS OF</span>
              <div className="w-8 h-8 bg-yellow-600 border-2 border-black rounded-full flex items-center justify-center">
                <Coffee className="text-white" size={16} />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t-4 border-yellow-400 pt-6">
            <div className="bg-blue-600 text-white px-6 py-3 border-3 border-yellow-400 font-black inline-block mb-4 transform -rotate-1 shadow-lg">
              © {new Date().getFullYear()} MANEESHWAR. ALL POWERS RESERVED.
            </div>
            <p className="text-yellow-400 font-bold mt-2">
              DESIGNED & DEVELOPED WITH PASSION FOR CREATING AMAZING DIGITAL ADVENTURES
            </p>
          </div>

          {/* Fun Easter Egg */}
          <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-yellow-400 p-4 inline-block transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-xl">
            <p className="text-white font-black">
              🎮 SECRET CODE: THIS PORTFOLIO WAS BUILT WITH REACT + TYPESCRIPT + TAILWIND CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;