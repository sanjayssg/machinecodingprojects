import { useEffect, useState } from "react"
const useFetchProducts = () => {
const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    setIsLoading(true);
  const fetchProducts = async ()=>{
    const response = await fetch("http://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setIsLoading(false)
    return data;
  }
  fetchProducts();
},[]);
return{
    products,
    isLoading,
}
}
export default useFetchProducts;