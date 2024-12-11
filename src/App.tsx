import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StarBackground } from './components/StarBackground';
import { Bubble } from './components/Bubble/Bubble';
import { SubProductsPanel } from './components/SubProducts/SubProductsPanel';
import { Breadcrumb } from './components/Breadcrumb';
import { mockPillars } from './data/mockData';
import type { Pillar } from './types';

function App() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const handlePillarClick = (pillar: Pillar) => {
    setSelectedPillar(selectedPillar?.id === pillar.id ? null : pillar);
  };

  const handleHomeClick = () => {
    setSelectedPillar(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarBackground />
      
      <Breadcrumb
        pillarName={selectedPillar?.name ?? null}
        onHomeClick={handleHomeClick}
      />

      <div className="relative min-h-screen flex items-center justify-center">
        <AnimatePresence>
          {mockPillars.map((pillar, index) => (
            <Bubble
              key={pillar.id}
              pillar={pillar}
              index={index}
              total={mockPillars.length}
              isSelected={selectedPillar?.id === pillar.id}
              onClick={() => handlePillarClick(pillar)}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedPillar && (
          <SubProductsPanel
            subProducts={selectedPillar.subProducts}
            color={selectedPillar.color}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;