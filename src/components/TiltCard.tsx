import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export default function TiltCard({ children, className = '', id = '', onClick }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track absolute mouse positions normalized between -0.5 and 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for realistic inertia and butter-smooth deceleration
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 200 });

  // Soft translations for elegant 3D perspective lifts
  const translateZ = useSpring(0, { damping: 20, stiffness: 150 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from -0.5 (left/top) to 0.5 (right/bottom)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    translateZ.set(20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    translateZ.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className={`relative cursor-pointer select-none rounded-2xl ${className}`}
      id={id}
    >
      <div 
        style={{ 
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d" 
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
