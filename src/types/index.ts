export interface TeamMember {
  name: string;
  role: string;
  notes?: string;
  isEditable: boolean;
}

export interface SubProduct {
  name: string;
  description: string;
  smeSE: string;
  teamMembers: TeamMember[];
}

export interface Pillar {
  id: string;
  name: string;
  color: string;
  description: string;
  groupLeaderRole: string;
  groupLead: string;
  subProducts: SubProduct[];
}