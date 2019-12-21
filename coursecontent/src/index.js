import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {

  return (
    <div>
      <h2>{props.content}</h2>
    </div>

  )

}

const Content = (props) => {

  return (
    <div>
      {props.parts}
    </div>

  )

}

const Total = (props) => {

  return (
    <div>
      <p style={{ fontWeight: "bold" }}> total of {props.total} exercises</p>
    </div>

  )

}


const Course = ({ courses }) => {

  const courseArray = () => courses.map(content => {
    const parts = () => content.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
    const total = () => content.parts.reduce((total, part) => {
      return total + part.exercises
    }, 0)

    console.log(total)

    return (
      <div key={content.id}>
        <Header content={content.name} />
        <Content parts={parts()} />
        <Total total={total()} />
      </div>
    )

  }
  )

  return (
    <div>
      {courseArray()}
    </div>

  )


}






const App = () => {


  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>

      <Course courses={courses} />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

