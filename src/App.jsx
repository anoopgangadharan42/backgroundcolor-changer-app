import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[background, setbackground] =useState()
  useEffect(()=>{
    document. body.className=background
  },[background])
  const handleFunction =(color)=>{
    setbackground(color)
  }
 
  return (
    <>
    <div  style={{width:'100%',height:'100vh'}}className="d-flex justify-content-center align-item-center" >
      <div className="rounded p-3">
      <h1>Random Background color changer</h1>
      <div style={{marginTop:'20px' }} className="text-center">
        <button onClick={()=>handleFunction('bg-danger')}type='button' className='btn btn-danger'>red</button>
        <button onClick={()=>handleFunction('bg-warning')}type='button' className='btn btn-warning'>yellow</button>
        <button onClick={()=>handleFunction('bg-primary')}type='button' className='btn btn-primary'>blue</button>
        <button onClick={()=>handleFunction('bg-text-success')}type='button' className='btn btn-success'>green</button>
      </div>
    </div>
    </div>
     
     
   
    </>
  )
}

export default App