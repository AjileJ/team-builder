import React from 'react';

const TeamMemberCard = props => {
  return(
    <div className ='card-list'>
      {props.people.map(card => (
        <div className ='card' key={card.id}>
          <img src='https://images.unsplash.com/photo-1564889956728-9f3e4ad65498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='randomImg'/>
          <p>Name: {card.name}</p>
          <p>Email: {card.email}</p>
          <p className ='role'>Role: {card.role}</p>
          </div>
      ))}
    </div>
  );
};

export default TeamMemberCard