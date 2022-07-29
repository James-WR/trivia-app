import './App.css';
import Question from './components/Question'
import { nanoid } from 'nanoid'
import {useEffect, useState} from "react"


function App() {
  const [questions, setQuestions] = useState([])

    // fetches from api and formats all questions into new 'answers' array of objects
    useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=hard")
      .then(res => res.json())
      .then(data => setQuestions(data.results.map(question => {
        return {
          ...question, answers:
          [ ...question.incorrect_answers.map(ans => {
            return { text: ans, selected: false, correct: false, id: nanoid() }}),
              { text: question.correct_answer, selected: false, correct: true, id: nanoid() } ]
          .sort((a, b) => 0.5 - Math.random())
        }
      })))
  }, [])

  function clicked(id) {
    setQuestions(prev => {
      return prev.map(question => {
        const updatedAnswers = question.answers.map(answer => {
          return answer.id === id ?
            { ...answer, selected: !answer.selected } :
            answer
        })
        question.answers = updatedAnswers
        return question
      })
    })
  }

  const questionElements = questions.map(element => {
    return <Question
              id={nanoid()}
              key={nanoid()}
              question={element.question}
              answers={element.answers}
              correct={element.correct_answer}
              click={clicked}
              // select={() => selectAnswer(element.id)}
            />
  })

  return (
    <div>
      {questionElements}
      <button>Submit answers</button >
    </div>
  );
}

export default App;
