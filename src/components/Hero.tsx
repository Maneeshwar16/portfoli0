import React, { useRef, useState } from 'react';

const MAGNIFIER_SIZE = 200;
const MAGNIFIER_ZOOM = 2;

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const [magnifier, setMagnifier] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = nameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMagnifier({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMagnifier(m => ({ ...m, visible: false }));
  };

  return (
    <section
      id="home"
      className="relative pt-[100px] min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white flex flex-col items-center justify-center text-center px-6"
    >
      {/* Greeting Box */}
      <div className="bg-white text-black px-8 py-6 rounded-lg border-4 border-black shadow-xl mb-4 max-w-3xl text-xl font-black">
        "GREETINGS, CITIZENS! I'M A <span className='text-blue-600'>FULL STACK HERO</span> FROM VIT-AP!"
      </div>

      {/* Hero Name with Magnifier */}
      <div
        ref={nameRef}
        className="relative inline-block"
        style={{ lineHeight: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="bg-yellow-400 text-black px-6 py-2 border-4 border-black text-6xl md:text-8xl font-black shadow-2xl transform -rotate-2 mb-6 select-none">
          MANEESHWAR
        </h1>
        {magnifier.visible && (
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              left: magnifier.x - MAGNIFIER_SIZE / 2,
              top: magnifier.y - MAGNIFIER_SIZE / 2,
              width: MAGNIFIER_SIZE,
              height: MAGNIFIER_SIZE,
              borderRadius: '100%',
              boxShadow: '0 0 8px 2px rgba(0,0,0,0.25)',
              border: '3px solid #333',
              overflow: 'hidden',
              zIndex: 10,
              background: 'white',
            }}
          >
            <div
              style={{
                transform: `scale(${MAGNIFIER_ZOOM}) translate(${-magnifier.x + MAGNIFIER_SIZE / (2 * MAGNIFIER_ZOOM)}px, ${-magnifier.y + MAGNIFIER_SIZE / (2 * MAGNIFIER_ZOOM)}px)`,
                transformOrigin: 'top left',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              <h1 className="bg-yellow-400 text-black px-6 py-2 border-4 border-black text-6xl md:text-8xl font-black shadow-2xl transform -rotate-2 mb-6 select-none">
                MANEESHWAR
              </h1>
            </div>
          </div>
        )}
      </div>

      {/* Subtitle */}
      <div className="bg-red-600 text-white text-2xl md:text-3xl font-black px-6 py-2 border-4 border-black rounded-md shadow-lg">
        FULL STACK HERO
      </div>
    </section>
  );
};

export default Hero;
