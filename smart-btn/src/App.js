
import { useState } from 'react';
import './App.css';

function App() {
  const[presentP,afterP]=useState("Are you gay")
  const fun1=()=>{
    afterP("I knew it")
  }
  const[Pno,Ano]=useState("BeforTap")
  const[Btxt,Atxt]=useState("")
  const noClass=()=>{


      Ano("afterTap")
      Atxt("ohh shit... somthing went wrong you have only one option left now")
    
  }
  return (
    <>
      <div className="father">
        <div className="container">
          <div className="txt"><h1>{presentP}</h1></div>
          <div className="btns">
            <button className="yes" onClick={fun1}>YES</button>
            <div className="nocont">
              <button className={Pno} onClick={noClass}>NO</button>
            </div>
          </div>
          <h1>{Btxt}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
