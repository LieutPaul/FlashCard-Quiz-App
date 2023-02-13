import React from 'react'
import './Flashcard.css'

export default function Flashcard({flashCard}){
  const [flip,setFlip] = React.useState(false);
  return (
    <div className="card" id="card" onClick={()=>{
        setFlip(!flip)
      }}>
      <div className='card-body'>
        {
          flip===true ? 
            flashCard.correct_answer
          :
            flashCard.question
        }
        <br/>
        {flip === false && 
        <div>
          <ol>
            {flashCard.incorrect_answers.map((option,number) => {
              return (
                <li key={number}>{option}</li>
              )
            })}
            <li>{flashCard.correct_answer}</li>
          </ol>
          </div>
        }
      </div>
      
    </div>
  )
}
