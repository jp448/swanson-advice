import React, { useState } from "react";
import './App.css';
import Search from "./Search";
import Button from "./Button";
import swanson from "./images/Swanson.png";



function App() {
  const [swansonQuote, setSwansonQuote] = useState("");

  async function getQuote(e) {
    e.preventDefault();
    let response = await fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${e.target[0].value}`);
    let data = await response.json();
    if (data.length === 0) {
      setSwansonQuote("no comment");
    } else {
      setSwansonQuote(data[Math.floor(Math.random() * data.length)]);
    }      
  }

  async function getRandomQuote() {
    let response = await fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
    let data = await response.json();
    setSwansonQuote(data[0]);
}
  
  return (
    <div className="App">
      {swansonQuote !== "" ? <h1>"{swansonQuote}"</h1> : <h1>Welcome to the Ron Swanson Advice App</h1> }
      <img src={swanson} alt="an outline of ron swanson"/>
      <h3>Ask Ron Anything!</h3>
      <Search getQuote={getQuote}/>
      <h3>Or Request Random Ron Wisdom</h3>
      <Button getRandomQuote={getRandomQuote} text="Get Wisdom"/>
    </div>
  );
}

export default App;
