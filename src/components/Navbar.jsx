import React from 'react'
import './Navbar.css'

export default function Navbar() {
    var API_URL="https://opentdb.com/api.php?";

    const [category, setCategory] = React.useState("any");
    const [numberOfQuestions, setNumberofQuestions] = React.useState(10);
    
    const getNewQuestions = (e) =>{
        e.preventDefault();
        API_URL = API_URL + "amount=" + numberOfQuestions + "&category=" + category;
        console.log(API_URL);
    }
    
    return (
        <div className='NavBar container-fluid'>
            <div className='row'>
                <div className='col-12 app_name'>
                    <u>Quiz App</u>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-1 margin_small' style={{"margin":"auto"}}>
                    <label htmlFor="trivia_category">Category: </label>
                </div>
                <div className='col-lg-4 margin_small'>
                    <select name="trivia_category" className="form-control" id="trivia_category" value={category} onChange={(e)=>{
                        setCategory(e.target.value);
                    }}>
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>		
                    </select>
                </div>
                <div className='col-lg-1 margin_small' style={{"margin":"auto"}}>
                    <label htmlFor="trivia_amount">Questions:</label>
                </div>
                <div className='col-lg-4 margin_small'>
                    <input 
                        type="number" 
                        name="trivia_amount" 
                        id="trivia_amount" 
                        className="form-control" 
                        value={numberOfQuestions} 
                        onChange={(e)=>{
                            setNumberofQuestions(e.target.value);
                        }}
                        min="1" 
                        max="50"
                    />
                </div>
                <div className='col-lg-2 margin_small' style={{"textAlign":"center"}}>
                    <button className='btn btn-outline-primary' onClick={getNewQuestions}>Submit</button>
                </div>
            </div>
        </div>
    )
}
