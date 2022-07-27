import './App.css';
import Question from './components/Question'
import {useEffect, useState} from "react"


function App() {
  const [data, setData] = useState([])

  // This useEffect fetches from the API and then changes the 'incorrect answers'
  // array into an array of objects. It then makes the result our new data state
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=hard")
    .then(res => res.json())
      .then(data => setData(data.results.map(question => {
        return {
          ...question, incorrect_answers: question.incorrect_answers.map(ans => {
            return { text: ans, selected: false, correct: false }
          })
        }
      })))
  }, [])



  return (
    <Question />
  );
}

export default App;
