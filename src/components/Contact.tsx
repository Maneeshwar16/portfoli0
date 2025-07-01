import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'HERO SIGNAL',
      value: 'maneeshwar@vitap.ac.in',
      link: 'mailto:maneeshwar@vitap.ac.in',
      color: 'bg-red-600'
    },
    {
      icon: Phone,
      label: 'EMERGENCY LINE',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
      color: 'bg-green-600'
    },
    {
      icon: MapPin,
      label: 'SECRET BASE',
      value: 'Amaravati, AP, India',
      link: '#',
      color: 'bg-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: '#',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: '#',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: '#',
      color: 'hover:bg-sky-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-purple-500 relative overflow-hidden">
      {/* Comic Action Words Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 border-4 border-black rounded-full opacity-20 animate-pulse flex items-center justify-center">
          <span className="font-black text-black text-lg">BAM!</span>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-400 border-4 border-black rounded-full opacity-20 animate-bounce flex items-center justify-center">
          <span className="font-black text-black">POW!</span>
        </div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 border-4 border-black rounded-full opacity-20 animate-ping flex items-center justify-center">
          <span className="font-black text-black text-sm">ZAP!</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <div className="bg-yellow-400 text-black px-8 py-4 border-6 border-black transform rotate-2 shadow-2xl">
              <h2 className="text-6xl font-black">ASSEMBLE THE TEAM!</h2>
            </div>
            {/* Comic explosion */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-600 border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-white font-black text-lg">BOOM!</span>
            </div>
          </div>
          <div className="bg-white border-4 border-black px-6 py-3 inline-block transform -rotate-1 shadow-xl">
            <p className="text-xl text-black font-black">
              READY TO CREATE SOMETHING LEGENDARY? SEND THE SIGNAL!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Comic Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white border-6 border-black p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 border-4 border-black rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <div className="bg-red-600 text-white px-6 py-3 border-3 border-black font-black text-2xl transform -rotate-2 shadow-lg">
                  SEND MESSAGE
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="bg-blue-600 text-white px-4 py-2 border-2 border-black font-black mb-2 inline-block transform -rotate-1">
                    YOUR HERO NAME
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black font-bold text-black focus:outline-none focus:bg-yellow-100 transition-colors duration-300"
                    placeholder="What should I call you, hero?"
                    required
                  />
                </div>

                <div>
                  <div className="bg-green-600 text-white px-4 py-2 border-2 border-black font-black mb-2 inline-block transform rotate-1">
                    COMMUNICATION DEVICE
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black font-bold text-black focus:outline-none focus:bg-yellow-100 transition-colors duration-300"
                    placeholder="your.signal@herobase.com"
                    required
                  />
                </div>

                <div>
                  <div className="bg-yellow-600 text-white px-4 py-2 border-2 border-black font-black mb-2 inline-block transform -rotate-1">
                    SECRET MESSAGE
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border-4 border-black font-bold text-black focus:outline-none focus:bg-yellow-100 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your epic mission or just say hi!"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white border-4 border-black px-6 py-4 font-black text-xl hover:bg-red-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send size={24} />
                    <span>LAUNCH MESSAGE!</span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.link}
                  className="group block bg-white border-4 border-black p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${info.color} border-4 border-black rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <div className={`${info.color} text-white px-4 py-2 border-2 border-black font-black mb-2 inline-block transform -rotate-1`}>
                        {info.label}
                      </div>
                      <p className="text-black font-bold text-lg">{info.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="bg-white border-4 border-black p-6 shadow-xl">
              <div className="bg-purple-600 text-white px-4 py-2 border-2 border-black font-black text-xl mb-6 inline-block transform rotate-1">
                JOIN THE LEAGUE
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`w-16 h-16 bg-gray-100 border-3 border-black rounded-full flex items-center justify-center text-black ${social.color} text-white transform hover:scale-125 hover:-rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Comic Quote */}
            <div className="bg-yellow-400 border-4 border-black p-6 text-center shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="text-6xl mb-4">🚀</div>
              <div className="bg-red-600 text-white px-4 py-2 border-2 border-black font-black text-lg mb-4 inline-block transform -rotate-2">
                HERO WISDOM
              </div>
              <p className="text-black font-black text-xl">
                "EVERY LEGENDARY PROJECT STARTS WITH AN EPIC CONVERSATION!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;