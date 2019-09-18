import React from 'react';

const TeamMemberCard = props => {
  return(
    <div className ='card-list'>
      {props.cards.map(card => (
        <div className ='card' key={card.id}>
          <p>{card.name}</p>
          <p>{card.email}</p>
          <p>{card.role}</p>
          </div>
      ))}
    </div>
  );
};

export default TeamMemberCard