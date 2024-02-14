import './App.css'

function App() {
  const handleclickfunction =(e)=>{
   const body =document.querySelector('body');
   body.style.background= getRandomColor()
   e.target.style.backgroundcolor =getRandomColor()
  };

    function getRandomColor(){
      let letters ='0123456789ABCDEF'
      let color='#'
      for(let i =0; i<6; i++){
        color+=letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  return (
    <>
     <div className="container">
     <h1>Random Background color changer</h1>
     <button className='btn' onClick={handleclickfunction}> click me</button>

     </div>
     
   
    </>
  )
}

export default App
