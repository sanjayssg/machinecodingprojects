import { useState } from 'react';
import Cell from './Cell';

function App() {
const [order, setOrder] = useState([]);
const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1],
  ];

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    //deactivation
    if(newOrder.length === config.flat(1).filter(Boolean).length){
      deactivateCells()
    }
  }

  const deactivateCells = () =>{
    setIsDeactivating(true);
    const timer = setInterval(()=>{
      setOrder((originalOrder)=>{
         const newOrder = originalOrder.slice();
         newOrder.pop();

         if(newOrder.length === 0){
          clearInterval(timer);
          setIsDeactivating(false);
         }

         return newOrder;
      })
    },300)
  }

  return (
    <div className='wrapper'>
        <div className='grid' style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}>
          {config.flat(1).map((item, index)=>{
           return item ?
            <Cell 
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={()=> activateCells(index)}
              isDisabled = {order.includes(index)} 
            /> : <span key={index}/>
          }
          )}
        </div>
    </div> 
  )
}

export default App
