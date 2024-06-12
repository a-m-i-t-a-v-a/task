import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const LIMIT=10

const ProductList = () => {

    const [products,setProducts]=useState([])
    const [currentPage,setCurrentPage]=useState(0)
    const [noOfPages,setNoOfPages]=useState(0)

    const fetchData=async()=>{
        const data=await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage*LIMIT}&select=title,description,price,thumbnail,rating`)
        const resJson=await data.json()
        setProducts(resJson?.products)
        setNoOfPages(Math.ceil(resJson.total/LIMIT))
    }

    const handleNext=()=>{
      if(currentPage<noOfPages-1){
        setCurrentPage(currentPage+1)
      }
      if(currentPage>=noOfPages-1){
        setCurrentPage(0)
      }
    }

    const handlePrev=()=>{
      if(currentPage>0){
        setCurrentPage(currentPage-1)
      }
      if(currentPage<=0){
        setCurrentPage(noOfPages-1)
      }
    }

    useEffect(()=>{
        fetchData()
    },[currentPage])

  return (
    <div className="container mt-5">
       <div className="row">
        <h2>Welcome</h2>
        {products.map((product)=>{
          return (
            <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard 
                    thumbnail={product.thumbnail}
                    title={product.title} 
                    description={product.description}
                    price={product.price}
                />
            </div>
          )
        })}
       </div>
       <div className='pagination'>
        <span className='pagination-item' onClick={handlePrev}>Prev</span>
        {[...Array(noOfPages).keys()].map(val=>
          <span 
            key={val} 
            className={`pagination-item ${currentPage === val ? 'active' : ''}`}
            onClick={()=>setCurrentPage(val)}
          >
            {val+1}
          </span>
        )}
        <span className='pagination-item' onClick={handleNext}>Next</span>
       </div>
    </div>
  )
}

export default ProductList
