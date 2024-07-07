import { useState } from 'react';
import { HeartIcon, SpinnerIcon } from './Icon';

function App() {
  const [liked, setLiked] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async() => {
    setIsFetch(true);
    setError(null);
    try{
      const response = await fetch('https://www.greatfrontend.com/api/questions/like-button',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: !liked ? 'like' : 'unlike'
        }),
      });
      if(response.status >=200 && response.status <300){
        setLiked(!liked);
      }else{
        const data = await response.json();
        setError(data.message);
        return;
      }
    }finally{
      setIsFetch(false);
    
  }
}

  return (
    <div>
      <button 
        disabled={isFetch}
        className={`likeBtn ${liked ? 'liked' : ''}`} 
        onClick={handleClick}
      >
        {isFetch ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default App;
