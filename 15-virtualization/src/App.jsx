import './App.css'
import VirtualizedList from './components/VirtualizedList'

function App() {
  const LISTS = Array.from({length: 100000}, (_, index)=> index + 1);
  return (
    <div className='App'>
      <VirtualizedList lists={LISTS} height={400} width={300} itemHeight={35}/>
    </div>
  )
}

export default App
