import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { showDetailProduct } from '../../store/ProductSlice';
import { addPurchase } from '../../store/PurchaseSlice';
import './ShowDetail.css'

export const ShowDetail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const {showProduct} =useSelector((state)=>state.product);
  const getProduct = ()=>{
    fetch(`https://fakestoreapi.com/products/${param.id}`)
        .then(res=>res.json())
        .then(json=>dispatch(showDetailProduct(json)))
}
    useEffect(()=>{
      getProduct();
    },[])

 
  return (

    <div>
<div className="showContainer">
  <div className="allImages" >
    <img src={showProduct.image} />
  </div>
  
  <div className="product">
    <h1>{showProduct.title}</h1>
    <h3> Type : {showProduct.category}</h3>
    <h3> Price : {showProduct.price}</h3>
    <h3 >description : {showProduct.description}</h3>
    <div className="allButtons" >
      <button className="add" 
      onClick={()=>dispatch(addPurchase(showProduct))}
      // onClick={()=>console.log('hgj')}
      >Add to Cart</button>
    </div>
  </div>
</div>
    </div> 


  )
}
