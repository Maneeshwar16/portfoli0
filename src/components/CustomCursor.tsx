import React, { useEffect, useState } from 'react';

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
      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
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
              className="w-20 h-20"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor; 