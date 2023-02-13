import FlashcardList from "./components/FlashcardList";
import { sampleFlashCardList } from "./SampleFlashCards";
import axios from 'axios'
import React from "react";
import './App.css'
export default function App() {
  const API_URI="https://opentdb.com/api.php?amount=10";
  const [flashCards,setFlashCards] = React.useState(sampleFlashCardList)
  
  const getQuestions = async () => {
    try {
      const fetchData = await axios.get(API_URI)
      setFlashCards(fetchData.data.results);
    } catch (error) {
      console.log(error)
    }
  }
  
  React.useEffect(()=>{
    getQuestions();
  },[])

  return (
    <div>
      <FlashcardList flashCards={flashCards}/>
    </div>
  );
}
