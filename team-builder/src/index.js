import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TeamMemberCard from './components/TeamMemberCard';
import TeamMemberForm from './components/TeamMemberForm';




function App(){
  
  const [cards, setCards]= useState([
  {
    name: '',
    email:'',
    role:''
  }
]);

const addNewCard = card => {
  const newCard = {
    name: card.name,
    email: card.email,
    role: card.role
  };
  setCards([...cards, newCard])
}
  
  
  
  
  
  
  
  return(
  <div className = "App">
  <h1 className="teamMembers">Team Members</h1>
  <TeamMemberForm className="teamForm" addNewCard={addNewCard}/>
  <TeamMemberCard cards={cards}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));






















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

