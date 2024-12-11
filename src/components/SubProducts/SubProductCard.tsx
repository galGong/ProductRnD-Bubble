import React from 'react';
import { TeamMembersList } from './TeamMembersList';
import type { SubProduct } from '../../types';

interface SubProductCardProps {
  product: SubProduct;
  color: string;
}

export const SubProductCard: React.FC<SubProductCardProps> = ({ product, color }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
      <p className="text-sm text-gray-300 mb-4">{product.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm text-gray-400 mb-1">SME SE</h4>
        <p className="text-sm text-gray-300">{product.smeSE}</p>
      </div>

      <TeamMembersList members={product.teamMembers} color={color} />
    </div>
  );
};