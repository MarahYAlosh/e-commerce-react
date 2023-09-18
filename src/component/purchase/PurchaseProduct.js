import { useDispatch,useSelector } from 'react-redux';
import './PurchaseProduct.css'
import {removePurchase} from '../../store/PurchaseSlice'

export const PurchaseProduct = () => {
  const {purchase} =useSelector((state)=>state);
  
   const dispatch = useDispatch();
  const totalPrice = purchase.reduce((acc,curr)=>{
    acc += curr.price *curr.quantity;
    return(acc);
  },0)
   const content =  ()=>{
     const pur=  purchase.map(el=>{
  
          return(
            <div className='container'>
             
            <div className="card mb-3" style={{maxWidth: '840px' , maxHeight: '640px'}}>
            <div className="row g-0">
            <button onClick={()=>dispatch(removePurchase(el))} type="button" className="btn-close" aria-label="Close"></button>
              <div className="col-md-7">
                <img src={el.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                <div className="card-body">
               
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">Type : {el.category}</p>
                  <p className="card-text">quantity : {el.quantity}</p>
                  <p className="card-text">Price : {el.price}</p>
                  <p className="card-text">description : {el.description}</p>
                </div>
              </div>
              </div>
          </div>
  
          </div>
          )
          
        
      
    
      })
      return pur;
   }

  return (
<div className='container'>
<h2 className='text-center'>Total Price : {totalPrice}$</h2>
    {content()}
  </div>
  )
}
