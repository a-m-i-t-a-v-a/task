import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const ProductCard = ({thumbnail,title,description,price}) => {
  return (
    <div className="card h-100">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <p className="text-muted">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
