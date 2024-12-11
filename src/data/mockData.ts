import type { Pillar } from '../types';

export const mockPillars: Pillar[] = [
  {
    id: '1',
    name: 'AI/ML',
    color: '#7340d8',
    description: 'Artificial Intelligence and Machine Learning initiatives',
    groupLeaderRole: 'AI Director',
    groupLead: 'Sarah Chen',
    subProducts: [
      {
        name: 'Smart Analytics',
        description: 'AI-powered analytics engine',
        smeSE: 'John Doe',
        teamMembers: [
          { name: 'Alice Johnson', role: 'ML Engineer', isEditable: true },
          { name: 'Bob Smith', role: 'Data Scientist', isEditable: true },
        ],
      },
      // Add more sub-products as needed
    ],
  },
  {
    id: '2',
    name: 'Platform',
    color: '#00867a',
    description: 'Core platform infrastructure',
    groupLeaderRole: 'Platform Lead',
    groupLead: 'Michael Ross',
    subProducts: [
      {
        name: 'Core Services',
        description: 'Foundation services and APIs',
        smeSE: 'Emma Wilson',
        teamMembers: [
          { name: 'David Lee', role: 'Backend Engineer', isEditable: true },
          { name: 'Carol White', role: 'DevOps', isEditable: true },
        ],
      },
    ],
  },
  // Add more pillars as needed
];