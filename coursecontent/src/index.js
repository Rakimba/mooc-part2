import React from 'react';
import ReactDOM from 'react-dom';

const Course =({course})=> {

    const contents = ()=>{
      
    const rows= course.parts.map(content=><li key ={content.id}>{
        content.name} {content.exercises}</li>)

        return rows
    }

return(
     <div>
      <h1> {course.name}</h1>
      {contents()}
     
     </div>

)


}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
         <ul>
        <Course course={course} />
        </ul>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

