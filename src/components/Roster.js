import React from 'react';
import TeamMember from './TeamMember';

const Roster = (teamMembers) => {
	return <div>
    <h2>G2 Crowd Product Team Roster</h2>
    {teamMembers.length > 0 ? teamMembers.map(member=>(
     <TeamMember key={member.id} member={member}/>
    )): <p>No info</p>}
  </div>;
};
export default Roster;
