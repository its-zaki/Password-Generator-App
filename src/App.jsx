import  React from "react";
import  {  useEffect, useState , useRef} from "react";
import copy from "./assets/copy.png";
import svg from "./assets/refresh.svg";
const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [Upper, setUpper] = useState(false);
  const [Lower, setLower] = useState(false);
  const reF = useRef(null)
  const btn = useRef("copy Password")

  
  useEffect(() => {
    generatePass();
  }, [number, length, symbol, Upper, Lower]);
  
  
  function copyText() {
    navigator.clipboard.writeText(password)   
    // alert("copied");
    reF.current.select()
    btn.current.value = "Copied!"

  }
  function refresh(){
    generatePass()
  }

  function includeNumber(e) {
    setNumber(e.target.checked);
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }
  function includeUpperCase(e) {
    setUpper(e.target.checked);
  }
  function includeLowerCase(e) {
    setLower(e.target.checked);
  }
  function generatePass() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "#@%^&*()!+";
    }
    if (Upper) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (Lower) {
      // let lowercase = str.toLowerCase();
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      // console.log(randomNumber)
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  }

  // generatePass()

  return (
    <>
      <div id="wrapper">
        <div className="container">
          <h1 className="head">PASSWORD GENERATOR</h1>
          <div className="display-container">
            <input value={password} id="result" className="display" readOnly ref={reF}/>
              
          
            <button className="copyBtn" id="copy" onClick={refresh}>
             <div className="icon">

             
              <img
              className="img"
                src={svg}
                alt="refresh" onClick={refresh}
              />
              
              </div>
            </button>
          </div>
          <div className="input-container">
            <div className="length-container">
              <p>Password Length</p>
              <p>{length}</p>
            </div>
            <div>
              <input
                type="range"
                min={5}
                max={15}
                className="slider"
                step="1"
                onChange={(e) => setLength(e.target.value)}
                value={length}
              />
            </div>

            <div className="check">
              <input type="checkbox" id="number" onChange={includeNumber} />
              <label htmlFor="number">Include Numbers</label>
            </div>

            <div className="check">
              <input type="checkbox" id="symbol" onChange={includeSymbol} />
              <label htmlFor="symbol">Include Symbol</label>
            </div>
            <div className="check">
              <input type="checkbox" id="Upper" onChange={includeUpperCase} />
              <label htmlFor="Upper">Include UpperCase Letters</label>
            </div>
            <div className="check">
              <input type="checkbox" id="Lower" onChange={includeLowerCase} />
              <label htmlFor="Lower">Include LowerCase Letters</label>
            </div>

            <input className="copyButton" onClick={copyText} value="copy Password" ref={btn}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
