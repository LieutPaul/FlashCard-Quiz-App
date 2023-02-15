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
            <div dangerouslySetInnerHTML={{ __html: flashCard.correct_answer}}></div>
          :
            <div dangerouslySetInnerHTML={{ __html: flashCard.question}}></div>
        }
        <br/>
        {flip === false && 
          <div>
            <ol>
              {flashCard.incorrect_answers.map((option,number) => {
                return (
                  <li key={number} dangerouslySetInnerHTML={{ __html: option}}></li>
                )
              })}
              <li dangerouslySetInnerHTML={{ __html: flashCard.correct_answer}}></li>
            </ol>
          </div>
        }
      </div>
      
    </div>
  )
}
