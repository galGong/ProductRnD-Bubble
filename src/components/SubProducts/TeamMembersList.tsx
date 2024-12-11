import React from 'react';
import { Pencil } from 'lucide-react';
import type { TeamMember } from '../../types';

interface TeamMembersListProps {
  members: TeamMember[];
  color: string;
}

export const TeamMembersList: React.FC<TeamMembersListProps> = ({ members, color }) => {
  return (
    <div>
      <h4 className="text-sm text-gray-400 mb-2">Team Members</h4>
      {members.map((member, idx) => (
        <div key={idx} className="flex items-center justify-between mb-1">
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
  );
};