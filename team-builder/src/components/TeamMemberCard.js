import React from 'react';

const TeamMemberCard = props => {
  return(
    <div className ='card-list'>
      {props.people.map(card => (
        <div className ='card' key={card.id}>
          <img src='https://images.unsplash.com/photo-1485001564903-56e6a54d46ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='randomImg'/>
          <p>Name: {card.name}</p>
          <p>Email: {card.email}</p>
          <p className ='role'>Role: {card.role}</p>
          </div>
      ))}
    </div>
  );
};

export default TeamMemberCard