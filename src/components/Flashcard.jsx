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
            flashCard.answer
          :
            flashCard.question
        }
        <br/>
        {flip === false && 
          flashCard.options.map((option,number) => {
            return (
              <h4 key={number}>{option}</h4>
            )
          })
        }
      </div>
      
    </div>
  )
}
