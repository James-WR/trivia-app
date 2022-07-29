import React from 'react'
import Answer from './Answer'

export default function Question(props) {
  const answerElements = props.answers.map(answer => {
    return <Answer key={answer.id} id={answer.id} click={props.click} correct={answer.correct} text={answer.text} selected={answer.selected}/>
  })

  return (
    <div>
      <p><strong>{props.question}</strong></p>
      <div className="answers-container">
        {answerElements}
      </div>
    </div>
  )
}
