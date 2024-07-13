import { useEffect, useState } from 'react'

function BackendDriven() {
  const [products, setProducts] =  useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =  useState(0);

  const fetchProducts = async () =>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10 }`);
    const data = await res.json();
    if(data && data.products){
    setProducts(data.products);
    setTotalPages(Math.floor(data.total / 10))
    }
  }


  useEffect(()=>{
    fetchProducts()
  },[page])

  const selectPageHandler = (selectedPage)=>{
    if(selectedPage >= 1 
      && selectedPage <= totalPages
      && selectedPage !== page)
    setPage(selectedPage);
  }

  return (
    <div>
        {
          products && <div  className='products'>
            {
              products.map((product)=>(
                <span className='products__single' key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <span>{product.title}</span>
                </span>
              ))
            }
           </div>
        }
          {
            products?.length > 0 && <div className='pagination'>
           <span 
              className={page > 1 ? '' : 'pagination__disable'}
              onClick={()=>selectPageHandler(page - 1)} >◀</span>
              {[...Array(totalPages)].map((_, i)=>{
                return <span 
                  className={page === i + 1 ? 'pagination__selected' : ''}
                  onClick={()=>selectPageHandler(i + 1)} 
                  key={i + 1}
                >{i + 1}</span>
              })}
              <span 
                className={page < totalPages ? '' : 'pagination__disable'}
                onClick={()=>selectPageHandler(page + 1)}>▶</span>
              </div>
          }
    </div>
  )
}

export default BackendDriven;
