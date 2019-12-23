import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [ newName, setNewName ] = useState('')

 const addNewName =(event)=>{
setNewName(event.target.value)
 }

 console.log(persons)
 console.log(newName)

const row =()=> persons.map(person =><Person person={person.name}/>)

 const addPerson = (event)=>{
 
  event.preventDefault() 

 const  newObject = {name : newName}

 setPersons(persons.concat(newObject))
   setNewName ('')
   
   }


console.log(newName)

 console.log(persons)
     
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input value = {newName} onChange ={addNewName}/>
  
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {row()}
      </div>
  )
}

export default App;
