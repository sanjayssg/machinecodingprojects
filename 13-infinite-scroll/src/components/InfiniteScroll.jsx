import { useEffect, useState } from 'react'
import Post from './Post'

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);

useEffect(()=>{

  fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
    .then((res)=> res.json())
    .then((result)=> setData((prevData) => [...prevData,...result]))
    .catch((err)=> console.error("Failed to fetch", err));
    
},[pageNo])
  return <Post data={data} setPageNo={setPageNo}/>
}

export default InfiniteScroll