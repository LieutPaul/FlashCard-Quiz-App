import React from 'react'

export default function Flashcard({flashCard}){
  return (
    <div>
      {flashCard.id}
      <br/>
      {flashCard.question}
      <br/>
      {flashCard.answer}
      <br/>
      {flashCard.options.map((option,number) => {
        return (
          <h4 key={number}>{option}</h4>
        )
      })}
      <br/>
    </div>
  )
}
