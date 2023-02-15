import FlashcardList from "./components/FlashcardList";
import { sampleFlashCardList } from "./SampleFlashCards";
import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [flashCards,setFlashCards] = React.useState(sampleFlashCardList)

  return (
    <div>
      <Navbar setFlashCards={setFlashCards}/>
      <FlashcardList flashCards={flashCards}/>
    </div>
  );
}
