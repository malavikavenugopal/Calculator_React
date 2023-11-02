
import { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState('')
  const handleDisplay = (e) =>
  {
    setResult(result.concat(e.target.name))
  }
  const handleClear = ()=>{
    setResult('')
  }
  const handleBack =()=>{
    setResult(result.slice(0,-1))
  }
  const handleEqual = () =>{
   try{
    setResult(eval(result).toString())
   } 
   catch{
    setResult("error")
    setTimeout(()=>setResult(''),1000)
   }
  }
  console.log(result);
  return (
   
    <div className="App row">
      <div className='col-lg-4 col-md-3 '></div>
      <div style={{backgroundColor:'black'}} className=' col-lg-4 col-sm-12 col-md-6 calbody'>
        <div className='containers'>
          <div>
            <form>
              <input value={result} readOnly className='form-control'/>
            </form>
          </div>

          <div>
            <button className='clear' onClick={handleClear} >CLEAR</button>
            <button className='display'  style={{  backgroundColor: 'aqua'}} name="%"onClick ={handleDisplay}>%</button>
            <button className='display'  style={{  backgroundColor: 'aqua'}} name="/"onClick ={handleDisplay}> / </button>
            <button  className='display' name="7" onClick ={handleDisplay}>7</button>
            <button  className='display' name="8" onClick ={handleDisplay}>8</button>
            <button  className='display' name="9" onClick ={handleDisplay}>9</button>
            <button  className='display'  style={{  backgroundColor: 'aqua'}} name="*"onClick ={handleDisplay}>*</button>
            <button  className='display' name="4" onClick ={handleDisplay}>4</button>
            <button  className='display' name="5" onClick ={handleDisplay}>5</button>
            <button   className='display' name="6" onClick ={handleDisplay}>6</button>
            <button  className='display'  style={{  backgroundColor: 'aqua'}} name="-" onClick ={handleDisplay}>-</button>
            <button   className='display'name="1" onClick ={handleDisplay}>1</button>
            <button   className='display'name="2" onClick ={handleDisplay}>2</button>
            <button   className='display'name="3" onClick ={handleDisplay}>3</button>
            <button   className='display'  style={{  backgroundColor: 'aqua'}}name="+" onClick ={handleDisplay}>+</button>
            <button  className='display' name="0" onClick ={handleDisplay}>0</button>
            <button  className='display' name="." onClick ={handleDisplay}>.</button>
            <button  className='display'  style={{  backgroundColor: 'aqua'}}onClick ={handleBack}>⌫</button>
            <button  className='display' style={{  backgroundColor: 'aqua'}}onClick ={handleEqual}>=</button>

          </div>
      
    </div>
    </div>
    <div className='col-lg-4 calbottom'  ></div>
    </div>
  );
}

export default App;
