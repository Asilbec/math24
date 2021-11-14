import './App.css';
import axios from 'axios'
import { useState } from 'react'
import React from "react"



function App() {



  const [answers, newAnswers] = useState([{ 'answer': "" }])
  function solver() {
    newAnswers([{ 'answer': "" }])
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var d = document.getElementById('d').value

    if (a !== '' & b !== '' & c !== '' & d !== '') {
      axios.get('https://helloacm.com/api/24/?a=' + a + '&b=' + b + '&c=' + c + '&d=' + d + '')
        .then(function (response) {
          newAnswers([{ 'answer': "" }])
          var count = response.data.cnt
          console.log(count)
          if (count > 0) {
            for (let x = 0; x < count; x++) {
              console.log(response.data.result[x])
              newAnswers(answer => [...answer, { 'answer': response.data.result[x] }])
            }
          } else {
            newAnswers([{ 'answer': "No solutions" }])
          }

        }).catch(function (error) {
          console.log(error)
        })
    }

    else {
      newAnswers([{ 'answer': "Enter All values" }])
    }

  }
  return (
    <div className="App">
      <div className='selectionScreen'>
        <div className='selectionInput'>
          <form autoComplete='off' className='nice'>
            <input id='a' type='number'></input>
            <input id='b' type='number'></input>
            <input id='c' type='number'></input>
            <input id='d' type='number'></input>
          </form>
          <button id='findSol' onClick={() => solver()}>
            <h1>Search!</h1>
          </button>
        </div>
        <div className='answers'>
          <div className='answerList'>
            {answers.map((answers, index) => (
              <h1 key={index}>{answers.answer}</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
