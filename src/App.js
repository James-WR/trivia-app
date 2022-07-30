import './App.css';
import Question from './components/Question'
import { nanoid } from 'nanoid'
import { useEffect, useState } from "react"


function App() {
  const [questions, setQuestions] = useState([])
  const [selectedTotal, setSelectedTotal] = useState(0)
  const [correctTotal, setCorrectTotal] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [reset, setReset] = useState(false)

  // fetches from api and formats answers into a single randomised array of answer objects
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=hard")
      .then(res => res.json())
      .then(data => setQuestions(data.results.map(question => {
        return {
          ...question, id: nanoid(),
          answers:
            [ ...question.incorrect_answers.map(ans => {
              return { text: ans, selected: false, correct: false, id: nanoid(), parent: question.question }
            }), { text: question.correct_answer, selected: false, correct: true, id: nanoid(), parent: question.question }
            ].sort((a, b) => 0.5 - Math.random())
        }
      })))
  }, [reset])

  function selectAnswer(id, parent) {
    if (!submitted)
    setQuestions(prev => {
      return prev.map(question => {
        const updatedAnswers = question.answers.map(answer => {
          return answer.id === id ?
            { ...answer, selected: true } :
            answer.parent === parent ?
            { ...answer, selected: false } : answer
        })
        question.answers = updatedAnswers
        return question
      })
    })
    countSelected()
  }

  const questionElements = questions.map(element => {
    return <Question
              id={nanoid()}
              key={nanoid()}
              question={element.question}
              answers={element.answers}
              correct={element.correct_answer}
              click={selectAnswer}
            />
  })

  function checkAnswers() {
    const correctAnswers = []
    questions.map(question => question.answers.map(answer => {
      if (answer.selected && answer.correct) {
        correctAnswers.push(answer)
      }
      return correctAnswers
    }))
    setCorrectTotal(correctAnswers.length)
    setSubmitted(true)
  }

  function resetGame() {
    setSubmitted(false)
    setReset(prev => !prev)
  }

  function countSelected() {
    const selectedAnswers = []
    questions.map(question => question.answers.filter(answer => {
      if (answer.selected) selectedAnswers.push(answer)
      return selectedAnswers
    }))
    setSelectedTotal(selectedAnswers.length + 1)
  }

  return (
    <div>
      {questionElements}
      <button disabled={selectedTotal < questions.length} className="submit-button" onClick={checkAnswers}>Submit answers</button >
      {submitted && <p>You got {correctTotal} / 5</p>}
      {submitted && <button onClick={resetGame}>Replay</button >}
    </div>
  );
}

export default App;
