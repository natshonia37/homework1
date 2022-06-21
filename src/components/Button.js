import { useState } from "react";
export default function Button({ text, onClick , input, MainDiv }) {
  const [inputValue, setInputValue] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    alert(inputValue)

    
  }


  console.log(setInputValue);
  return (
    <div className="MainDiv">
      
      
      
      <p>{inputValue}</p>
      
       <form onSubmit={handlesubmit}  className='form'> 
        <h3 className="rooms"> Rooms</h3>
      <label for="Rooms">
        <input type="text" placeholder="rooms" className="input" onChange={(e) => setInputValue(e.target.value)}  onClick={(e)=>setInputValue(e.target.value)}/>
      </label>
      <button
        className="buttonclass"
        value={inputValue}
        onClick={onClick}
        onSubmit={handlesubmit}    
      >
        
        Submit
      </button> 
      
      
      </form>
     

      

      {MainDiv}
      {input}
      {text}
    </div>
  );
}
