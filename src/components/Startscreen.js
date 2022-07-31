import React from 'react'
import "./Startscreen.css"

export default function StartScreen(props) {
  return (
    <>
      <div className="start-container">
        <h1 className="title-main">Trivia Time</h1>
        <p className="start-tagline">Put your general knowledge to the test!</p>
        <button className="start-button" onClick={props.startGame}>Start Game</button>
      </div>
      <div className="circle-topright"></div>
      <div className="circle-bottomleft"></div>
    </>
  )
}
