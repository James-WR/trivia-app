import React from 'react'
import Answer from './Answer'

export default function Question(props) {
  // console.log(props.answers)
  const answerElements = props.answers.map(answer => {
    return <Answer key={answer.id} id={answer.id} click={props.click} correct={answer.correct} text={answer.text} selected={answer.selected} parent={answer.parent}/>
  })
  // console.log(answerElements)

  return (
    <div>
      <p><strong>{props.question}</strong></p>
      <div className="answers-container">
        {answerElements}
      </div>
    </div>
  )
}
