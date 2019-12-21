import React from 'react' 

const Course = (props) => {
    const { courses } =props
  
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
  
  export default Course;
  
