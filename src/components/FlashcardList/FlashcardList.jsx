import React from 'react'
import Flashcard from '../Flashcard/Flashcard'

export default function FlashcardList({flashCards}){
  return (
    <div className='container-fluid'>
      <div className='row'>
        {flashCards.map((flashCard,number)=>{
          return (
            <div key={number} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 mt-4">
              <Flashcard flashCard={flashCard}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}
