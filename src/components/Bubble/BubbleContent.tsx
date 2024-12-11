import React from 'react';
import type { Pillar } from '../../types';

interface BubbleContentProps {
  pillar: Pillar;
}

export const BubbleContent: React.FC<BubbleContentProps> = ({ pillar }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-white mb-2">{pillar.name}</h2>
      <p className="text-sm text-white opacity-80 text-center mb-2">
        {pillar.description}
      </p>
      <div className="text-sm text-white">
        <p className="font-semibold">{pillar.groupLeaderRole}</p>
        <p>{pillar.groupLead}</p>
      </div>
    </>
  );
};