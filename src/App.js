import FlashcardList from "./components/FlashcardList";
import { sampleFlashCardList } from "./SampleFlashCards";
import React from "react";
import './App.css'
export default function App() {
  React.useEffect(()=>{

  },[])
  const [flashCards,setFlashCards] = React.useState(sampleFlashCardList)
  return (
    <div>
      <FlashcardList flashCards={flashCards}/>
    </div>
  );
}
