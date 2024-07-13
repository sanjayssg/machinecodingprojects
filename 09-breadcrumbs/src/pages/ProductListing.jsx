import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from './ProductCard';

const ProductListing = () => {
    const { products, isLoading } = useFetchProducts();
    if(isLoading) return <>Loading....</>
    return (
        <div>
            <h2>Product Listing </h2>
            <div className="product-grid">
                {products?.map((product)=>(
                <ProductCard {...product} key={product.id}/>
                ))}
            </div>
      </div>
    )
}

export default ProductListing