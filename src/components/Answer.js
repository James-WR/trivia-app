import React from 'react'

export default function Answer(props) {
  // const styles = {
  //   backgroundColor: props.choice === false ? "red": "grey",
  // }

  const styles = {
    border: props.correct && props.submitted && !props.selected ? "3px solid green" : "",
    backgroundColor: props.selected && props.submitted && !props.correct ? "pink" : props.selected ? "lightGreen" : "lightGrey"
    // backgroundColor: props.selected ? props.submitted && !props.correct ? "pink" : "lightGreen" : "lightGrey"

  }



  return (
    <div>
      <button style={styles} onClick = {() => props.click(props.id, props.parent)}>{props.text}</button>
    </div>
  )
}
