import React from 'react';
import { motion } from 'framer-motion';
import { SubProductCard } from './SubProductCard';
import type { SubProduct } from '../../types';

interface SubProductsPanelProps {
  subProducts: SubProduct[];
  color: string;
}

export const SubProductsPanel: React.FC<SubProductsPanelProps> = ({
  subProducts,
  color,
}) => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-opacity-90 bg-gray-900 rounded-t-3xl"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="p-12 grid grid-cols-3 gap-6">
        {subProducts.map((product, index) => (
          <SubProductCard key={index} product={product} color={color} />
        ))}
      </div>
    </motion.div>
  );
};