import React from 'react';

const certificates = [
  {
    title: 'UI/UX Design Training',
    file: 'UI_UX Design Training - Certificate of Completion.pdf',
    type: 'pdf',
  },
  {
    title: 'Maneeshwar',
    file: 'Maneeshwar  .pdf',
    type: 'pdf',
  },
  {
    title: 'Z1g2tDk',
    file: 'Z1g2tDk.pdf',
    type: 'pdf',
  },
  {
    title: 'DT',
    file: 'DT.png',
    type: 'image',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-yellow-200 relative overflow-hidden">
      {/* Comic Panel Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="bg-red-400 text-white px-8 py-4 border-6 border-black transform rotate-2 shadow-2xl">
              <h2 className="text-5xl font-black">CERTIFICATIONS</h2>
            </div>
            {/* Comic explosion */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-black font-black text-lg">WOW!</span>
            </div>
          </div>
          <div className="bg-white border-4 border-black px-6 py-3 inline-block transform -rotate-1 shadow-xl">
            <p className="text-xl text-black font-black">
              HERE ARE SOME OF MY SUPER CERTIFICATES!
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            cert.type === 'pdf' ? (
              <a
                key={cert.title}
                href={'/Certificates/' + cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-6 border-black p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2 flex flex-col items-center cursor-pointer"
              >
                <div className="w-full h-48 flex items-center justify-center border-4 border-black mb-4 bg-gray-100 text-black font-bold text-lg">
                  {cert.title}
                </div>
                <div className="bg-yellow-400 text-black px-4 py-2 border-3 border-black font-black text-lg transform -rotate-3 shadow-lg">
                  {cert.title}
                </div>
              </a>
            ) : (
              <div
                key={cert.title}
                className="bg-white border-6 border-black p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2 flex flex-col items-center"
              >
                <img src={'/Certificates/' + cert.file} alt={cert.title} className="w-full h-48 object-contain border-4 border-black mb-4 bg-gray-100" />
                <div className="bg-yellow-400 text-black px-4 py-2 border-3 border-black font-black text-lg transform -rotate-3 shadow-lg">
                  {cert.title}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 