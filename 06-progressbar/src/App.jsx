import { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'


function App() {
const [value, setValue] = useState(0);
const [success, setSuccess] = useState(false);

useEffect(()=>{
  let timer = 0;
  setInterval(()=>{
      timer = setValue((val) => val + 1);

  },100);
  return () =>{
    clearInterval(timer);
  }
},[])
  return (
    <div className='app'>
     <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)}/>
        <span>
          {success ? 'Completed!' : 'Loading....'}
        </span>
    </div>
  )
}

export default App
