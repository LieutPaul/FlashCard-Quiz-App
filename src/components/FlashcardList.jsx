import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashCards}){
  return (
    <div>
      {flashCards.map((flashCard)=>{
        return <Flashcard key={flashCard.id} flashCard={flashCard}/>
      })}
    </div>
  )
}
