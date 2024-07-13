import { Link } from "react-router-dom"

const ProductCard = ({
  id,
  thumbnail,
  title,
  price
}) => {
  return (
    <div className="product-card" key={id}>
  <Link to={`/products/${id}`}>
  <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <h3>${price}</h3>
      </Link>
    </div>
  )
}

export default ProductCard;