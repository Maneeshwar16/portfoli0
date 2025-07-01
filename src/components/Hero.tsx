import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-[100px] min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white flex flex-col items-center justify-center text-center px-6"
    >
      {/* Greeting Box */}
      <div className="bg-white text-black px-8 py-6 rounded-lg border-4 border-black shadow-xl mb-4 max-w-3xl text-xl font-black">
        "GREETINGS, CITIZENS! I'M A <span className='text-blue-600'>FULL STACK HERO</span> FROM VIT-AP!"
      </div>

      {/* Hero Name */}
      <h1 className="bg-yellow-400 text-black px-6 py-2 border-4 border-black text-6xl md:text-8xl font-black shadow-2xl transform -rotate-2 mb-6">
        MANEESHWAR
      </h1>

      {/* Subtitle */}
      <div className="bg-red-600 text-white text-2xl md:text-3xl font-black px-6 py-2 border-4 border-black rounded-md shadow-lg">
        FULL STACK HERO
      </div>
    </section>
  );
};

export default Hero;
