import React from 'react'

export default function Answer(props) {
  const styles = {
    backgroundColor: props.selected ? "lightGreen": "lightGrey"
  }
  return (
    <button style={styles} onClick = {() => props.click(props.id, props.parent)}>{props.text}</button>
  )
}
