import React from 'react'
import './Answer.css'

export default function Answer(props) {

  const styles = {
    border: props.correct && props.submitted && !props.selected ? "2px solid green" : props.selected? "none" : "0.9px solid #4D5B9E",
    backgroundColor: props.selected && props.submitted && !props.correct ? "pink" : props.selected ? "rgb(155, 209, 155)" : "transparent"
  }

  return (
    <>
      <button className="answer-button" style={styles} onClick = {() => props.click(props.id, props.parent)}>{props.text}</button>
    </>
  )
}
