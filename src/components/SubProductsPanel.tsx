import React from 'react';
import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';
import type { SubProduct } from '../types';

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
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          >
            <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{product.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm text-gray-400 mb-1">SME SE</h4>
              <p className="text-sm text-gray-300">{product.smeSE}</p>
            </div>

            <div>
              <h4 className="text-sm text-gray-400 mb-2">Team Members</h4>
              {product.teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between mb-1"
                >
                  <div>
                    <span className="text-sm text-gray-300">{member.name}</span>
                    <span
                      className="ml-2 px-2 py-0.5 text-xs rounded"
                      style={{
                        backgroundColor: `${color}66`,
                        color: 'white',
                      }}
                    >
                      {member.role}
                    </span>
                  </div>
                  {member.isEditable && (
                    <button
                      className="p-1 hover:bg-gray-700 rounded"
                      title="Edit member"
                    >
                      <Pencil className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};