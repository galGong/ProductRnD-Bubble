import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  pillarName: string | null;
  onHomeClick: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pillarName,
  onHomeClick,
}) => {
  if (!pillarName) return null;

  return (
    <motion.div
      className="fixed top-4 left-4 flex items-center text-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <button
        onClick={onHomeClick}
        className="flex items-center hover:text-purple-400 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </button>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
      <span>{pillarName}</span>
    </motion.div>
  );
};