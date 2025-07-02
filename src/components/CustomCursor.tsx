import React, { useEffect, useState } from 'react';
import awsLogo from '../../logo\'s/aws.svg';
import uiuxLogo from '../../logo\'s/ui design.png';
import restLogo from '../../logo\'s/rest.png';
import photoshopLogo from '../../logo\'s/photoshop.png';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  hoverType: string;
  isVisible: boolean;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverType: '',
    isVisible: false,
  });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isVisible: true,
      }));
    };

    const handleMouseEnter = () => {
      setCursor(prev => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, isVisible: false }));
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const skillElements = document.querySelectorAll('[data-skill]');

    const handleSkillEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const skill = target.getAttribute('data-skill');
      setCursor(prev => ({
        ...prev,
        isHovering: true,
        hoverType: skill || '',
      }));
    };

    const handleSkillLeave = () => {
      setCursor(prev => ({
        ...prev,
        isHovering: false,
        hoverType: '',
      }));
    };

    skillElements.forEach(el => {
      el.addEventListener('mouseenter', handleSkillEnter);
      el.addEventListener('mouseleave', handleSkillLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      skillElements.forEach(el => {
        el.removeEventListener('mouseenter', handleSkillEnter);
        el.removeEventListener('mouseleave', handleSkillLeave);
      });
    };
  }, []);

  const getTechIcon = (tech: string): string => {
    const icons: { [key: string]: string } = {
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'AWS': awsLogo,
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      'Github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'Photoshop': photoshopLogo,
      'Adobe Illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobeillustrator/adobeillustrator-plain.svg',
      'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobexd/adobexd-original.svg',
      'Adobe After Effects': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobeaftereffects/adobeaftereffects-plain.svg',
      'Adobe Premiere Pro': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobepremierepro/adobepremierepro-plain.svg',
      'Adobe InDesign': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobein/adobein-original.svg',
      'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'Framer': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg',
      'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
      'IOS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'UI/UX': uiuxLogo,
      'REST APIs': restLogo,
    };
    return icons[tech] || '';
  };

  if (!cursor.isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${cursor.x - 4}px, ${cursor.y - 4}px)`,
        }}
      />

      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out ${
          cursor.isHovering ? 'scale-150 border-blue-600' : 'scale-100'
        }`}
        style={{
          transform: `translate(${cursor.x - 16}px, ${cursor.y - 16}px)`,
        }}
      />

      {/* Tech icon tooltip */}
      {cursor.isHovering && cursor.hoverType && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out"
          style={{
            transform: `translate(${cursor.x + 20}px, ${cursor.y - 20}px)`,
          }}
        >
          <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200 flex items-center space-x-2">
            <img
              src={getTechIcon(cursor.hoverType)}
              alt={cursor.hoverType}
              className="w-40 h-50"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor; 