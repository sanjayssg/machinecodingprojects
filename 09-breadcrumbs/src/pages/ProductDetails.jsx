import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
   .then(res=>res.json())
   .then(res=> setProduct(res))
  },[])
 if(!product) return <>loading....</>;
  
 return (
    <div>
      <h2>Product Detail</h2>
      <div style={{ display: "flex"}}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          style={{height: 300}}
        />
        <div>
          <h3>{product.title}</h3>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
