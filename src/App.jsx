import React, { useEffect, useState } from 'react'
import copy from "./assets/copy.png"
const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [Upper, setUpper] = useState(false)
  const [Lower, setLower] = useState(false)


  useEffect(() => {
    generatePass()
  }, [number, length, symbol, Upper, Lower])

  function copyText() {
    navigator.clipboard.writeText(password)
    alert("copied")
    
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
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str += '0123456789'
    }
    if (symbol) {
      str += '#@%^&*()!+'
    }
    if (Upper) {
      let uppercase = str.toUpperCase()
      str = uppercase

    }
    if (Lower) {
      let lowercase = str.toLowerCase()
      str = lowercase

    }
  

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * str.length)
    // console.log(randomNumber)
    let char = str.charAt(randomNumber)
    pass += char
  }
  setPassword(pass)
}


  // generatePass()

  return (
    <>
    <h2 className='head'>Password Generator</h2>
      <div className='container'>
        <div className='result-container'>
          <h2 id="result">{password}</h2>
          <button className='btn' id="copy" onClick={copyText}><img src={copy} alt="copy" /></button>
        </div>
        <div className="options">
          <label htmlFor="length">Password Length {length}</label>
          <input type="range" id="length" min={6} max={14} onChange={(e) => setLength(e.target.value)}
            value={length} />
        </div>

        <div className="options">
          <label htmlFor="number">Number</label>
          <input type="checkbox" id="number" onChange={includeNumber} />
        </div>

        <div className="options">
          <label htmlFor="symbol">Symbol</label>
          <input type="checkbox" id="symbol" onChange={includeSymbol} />
        </div>
        <div className="options">
          <label htmlFor="Upper">UpperCase</label>
          <input type="checkbox" id="Upper" onChange={includeUpperCase} />
        </div>
        <div className="options">
          <label htmlFor="Lower">LowerCase</label>
          <input type="checkbox" id="Lower" onChange={includeLowerCase} />
        </div>
      </div>
    </>
  )
}

export default App