import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

export const Product = ({elements}) => {
  return (
    <div className='card'>
   
    <img className="card-img-top" src={elements.image} alt="Card image cap" />
 
    <div className='descriptions'>
    <div className="card-body">
    <h2 className="card-title">{elements.title}</h2>
   
   
    <button >
                   {/* className="btn btn-primary" */}
    <Link to={`product/${elements.id}`}>
      show Details
    </Link>
                </button>

  </div>
    </div>

    </div>
  )
}
