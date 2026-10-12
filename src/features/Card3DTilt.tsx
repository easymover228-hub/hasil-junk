import React from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};
