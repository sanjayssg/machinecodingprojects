import { useEffect } from 'react'

const Post = ({data, setPageNo}) => {
    console.log(data);
    useEffect(()=>{

        const observer = new IntersectionObserver((params)=>{
            if(params[0].isIntersecting){
                observer.unobserve(lastImage);
                console.log("Image last", lastImage)
                setPageNo(prevPageNo => prevPageNo + 1);
            }
        },{threshold: 1});
        
        const lastImage = document.querySelector(".image-post:last-child");
        if(!lastImage) return;
        observer.observe(lastImage);

        return ()=>{
            if(lastImage){
                observer.unobserve(lastImage);
            }
            observer.disconnect();
        }
    },[data, setPageNo]);

  return (
    <div className='container'>
        {data.map((img)=>
            <img className="image-post" src={img.download_url} alt={img.id} key={img.id}/>
        )}
    </div>
  )
}

export default Post