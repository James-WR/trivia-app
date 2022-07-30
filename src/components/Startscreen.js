import React from 'react'

export default function StartScreen(props) {
  console.log(props)
  return (
    <button onClick={props.startGame}>Start Game</button>
  )
}
