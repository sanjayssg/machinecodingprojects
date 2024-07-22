import { useEffect, useRef, useState } from 'react';
import data from '../data.json';


const DATA_LENGTH = data.length;
const ImageCarousel = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const handleNext = () =>{
        setIndex((prevIndex)=>{
            if(prevIndex == DATA_LENGTH - 1){
                return 0;
            }
             return prevIndex + 1;
        });
    } 
    
    const handlePrev = () =>{
        if(index === 0){
            setIndex(DATA_LENGTH -1 );
        }else{
            setIndex(index - 1);
        }
    } 

    const intervalFn = () =>{
        return ref.current = setInterval(handleNext,1000);
    }
    useEffect(()=>{
        intervalFn();

        return ()=>{
            clearInterval(ref.current);
        }
    },[])

  return (
    <div 
    onMouseEnter={()=> clearInterval(ref.current)}
    onMouseLeave={intervalFn}
    className='container'>
        <div className='left-btn' onClick={handlePrev}>{"<"}</div>
        <img src={data[index].download_url} alt='' />
        <div className='right-btn' onClick={handleNext}>{">"}</div>
    </div>
  )
}

export default ImageCarousel