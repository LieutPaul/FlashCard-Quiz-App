import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashCards}){

  return (
    <div className='container-fluid'>
      <div className='row'>

        {flashCards.map((flashCard)=>{
          return (
            <div key={flashCard.id} className="col-6">
              <Flashcard flashCard={flashCard}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}
