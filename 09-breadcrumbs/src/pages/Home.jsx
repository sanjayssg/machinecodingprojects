import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

const Home = () => {
 const { products, isLoading } = useFetchProducts();
  if(isLoading) return <>Loading....</>
  return (
      <div>
        <h2>Home Page</h2>
        <span>Trending Products</span>
        <div className="product-grid">
          {products?.slice(0,6).map((product)=>(
            <ProductCard {...product} key={product.id}/>
          ))}
        </div>
        <Link to="/products">
          <button style={{width: "100%", padding: 10}}> View All Products</button>
        </Link>
      </div>
    )
}

export default Home