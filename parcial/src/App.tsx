import React, { useState } from "react";
import "./App.css";
import Books from "../src/components/Books"

function App() {
  const [book, setBook] = useState<string>("");

  let text = "";

  console.log(book);
  
  return (
    <div className="App">
      
      
      <div className="Searcher">
        
        <div className="Input">
          <input type="text" onChange={(e) => (text = e.target.value)} />
        </div>
        <div className="Search">
          <button onClick={() => {if (text) setBook(text)}}>Search</button>
        </div>

        


      </div>

      {book !=  "" ? <Books></Books> : <div></div>}

    </div>
  );
}

export default App;
