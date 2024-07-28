import { useState } from "react"

const VirtualizedList = ({lists, height, width, itemHeight}) => {
    let start = 0;
    let end = Math.floor(height / itemHeight);
    const [indices, setIndices] = useState([start, end]);
    const visibleLists = lists.slice(indices[0], indices[1] + 1);
    function handleScroll(e){
        const { scrollTop } = e.target;
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        const newEndIndex = newStartIndex + end;
        setIndices([newStartIndex, newEndIndex]);
    }
    
  return (
    <div onScroll={handleScroll} className="container" style={{height, width, background: 'gray', overflow: 'auto' }}>
        <div style={{ height: lists.length * itemHeight, position: "relative"   }}>
            {visibleLists.map((item, index) => (
            <div className="item" key={item} 
            style={{
                height: itemHeight, 
                background: 'coral', 
                borderTop: '5px solid gray',
                position: 'absolute', 
                width: '100%',
                textAlign: 'center',
                top: (indices[0] + index) * itemHeight,
                }}>
                item-{item}
            </div>
            ))}
        </div>
    </div>
  )
}

export default VirtualizedList