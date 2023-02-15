import FlashcardList from "./components/FlashcardList/FlashcardList";
import { sampleFlashCardList } from "./SampleFlashCards";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [flashCards,setFlashCards] = React.useState(sampleFlashCardList)

  return (
    <div>
      <Navbar setFlashCards={setFlashCards}/>
      <FlashcardList flashCards={flashCards}/>
    </div>
  );
}
