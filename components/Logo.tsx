import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 110 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Loki Digital Logo"
    >
      {/* Construction/Grid Lines */}
      <line x1="35" y1="10" x2="35" y2="80" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
      <line x1="75" y1="10" x2="75" y2="80" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
      <line x1="45" y1="10" x2="45" y2="80" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="65" y1="10" x2="65" y2="80" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
      
      <line x1="20" y1="25" x2="90" y2="25" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
      <line x1="20" y1="65" x2="90" y2="65" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />

      {/* White 'D' Shape (Outline) */}
      <path 
        d="M35 25 H60 C75 25 80 30 80 45 C80 60 75 65 60 65 H35" 
        stroke="#F5F5F2" 
        strokeWidth="6" 
        strokeLinecap="square"
      />
      
      {/* Gold 'L' Shape (Interlocked) */}
      <path 
        d="M45 25 V55 H70" 
        stroke="#C9A24D" 
        strokeWidth="6" 
        strokeLinecap="square"
      />
      
      {/* Gold 'L' Bottom Extension to align with D if needed, simplified to match image feel */}
      <path 
        d="M45 55 V65" 
        stroke="#C9A24D" 
        strokeWidth="6" 
        strokeLinecap="square"
      />

      {/* Play Triangle Icon */}
      <path 
        d="M72 45 L62 39 V51 L72 45Z" 
        fill="#C9A24D" 
      />
    </svg>
  );
};