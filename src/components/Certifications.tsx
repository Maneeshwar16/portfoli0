import React from 'react';

const certificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    file: 'AWS Certified Cloud Practitioner certificate.pdf',
    type: 'pdf',
  },
  {
    title: 'Devtown',
    file: 'Devtown.pdf',
    type: 'pdf',
  },
  {
    title: 'DT',
    file: 'DT.png',
    type: 'image',
  },
  {
    title: 'Hackfrost',
    file: 'Hackfrost.pdf',
    type: 'pdf',
  },
  {
    title: 'ISRO',
    file: 'isro.pdf',
    type: 'pdf',
  },
  {
    title: 'UI/UX Design Training',
    file: 'UI_UX Design Training - Certificate of Completion.pdf',
    type: 'pdf',
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-yellow-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-3 text-4xl font-extrabold border-4 border-black transform -rotate-2 shadow-lg">
            CERTIFICATIONS
          </div>
          <p className="mt-4 text-xl font-bold text-black bg-white border-4 border-black inline-block px-4 py-2 shadow transform rotate-1">
            Tap to view my heroic achievements!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={`/Certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black p-4 rounded-xl shadow-lg transform hover:-rotate-1 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center justify-center h-48 border-4 border-black bg-yellow-300 mb-4 text-center px-4 py-2 font-bold text-lg text-black">
                {cert.type === 'image' ? (
                  <img
                    src={`/Certificates/${cert.file}`}
                    alt={cert.title}
                    className="object-contain max-h-40"
                  />
                ) : (
                  <span>{cert.title}</span>
                )}
              </div>
              <div className="text-center text-white bg-red-600 border-4 border-black px-4 py-2 font-black text-lg transform -rotate-1 shadow">
                VIEW {cert.type === 'pdf' ? 'PDF' : 'IMAGE'}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
