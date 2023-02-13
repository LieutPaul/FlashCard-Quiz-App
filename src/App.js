import FlashcardList from "./components/FlashcardList";
import { sampleFlashCardList } from "./SampleFlashCards";
import React from "react";
export default function App() {
  const [flashCards,setFlashCards] = React.useState(sampleFlashCardList)
  return (
    <div>
      <FlashcardList flashCards={flashCards}/>
    </div>
  );
}
