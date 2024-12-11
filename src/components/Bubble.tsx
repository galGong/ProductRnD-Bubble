import React from 'react';
import { motion } from 'framer-motion';
import type { Pillar } from '../types';

interface BubbleProps {
  pillar: Pillar;
  index: number;
  total: number;
  isSelected: boolean;
  onClick: () => void;
}

export const Bubble: React.FC<BubbleProps> = ({
  pillar,
  index,
  total,
  isSelected,
  onClick,
}) => {
  const angle = (index * 2 * Math.PI) / total;
  const radius = 300;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      initial={{ x, y }}
      animate={{
        x: isSelected ? 0 : x,
        y: isSelected ? -100 : y,
        scale: isSelected ? 1.2 : 1,
      }}
      whileHover={{ scale: isSelected ? 1.2 : 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div
        className="w-48 h-48 rounded-full flex flex-col items-center justify-center p-6 cursor-pointer"
        style={{
          backgroundColor: pillar.color,
          boxShadow: `0 0 15px ${pillar.color}80`,
          border: '2px solid rgba(255, 255, 255, 0.5)',
        }}
        onClick={onClick}
      >
        <h2 className="text-xl font-bold text-white mb-2">{pillar.name}</h2>
        <p className="text-sm text-white opacity-80 text-center mb-2">
          {pillar.description}
        </p>
        <div className="text-sm text-white">
          <p className="font-semibold">{pillar.groupLeaderRole}</p>
          <p>{pillar.groupLead}</p>
        </div>
      </div>
    </motion.div>
  );
};