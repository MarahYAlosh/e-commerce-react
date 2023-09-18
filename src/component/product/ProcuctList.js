import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addCategories } from "../../store/ProductSlice";
import { Product } from "./Product";
import "./Product.css";

export const ProcuctList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const categories = useSelector((state) => state.product.categories);
  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(addProducts(json)));
  };
  const getcategory = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((json) => dispatch(addCategories(json)));
  };
  const getProductInCategory = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((json) => dispatch(addProducts(json)));
  };

  useEffect(() => {
    getProduct();
    getcategory();
  }, []);
  const AllProduct = products.product;
  const content = () => {
    if (AllProduct.length > 0) {
      return (
        <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={() => getProduct()}
              className="btn btn-secondary"
            >
              All
            </button>
            {categories.map((cat) => {
              return (
                <button
                  type="button"
                  onClick={() => getProductInCategory(cat)}
                  key={cat}
                  className="btn btn-secondary"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      );
    } else {
    }
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">Our Product</h1>
    
      <div className="cards">


      <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">

          {
          AllProduct.length > 0 ? (
            <button
              type="button"
              onClick={() => getProduct()}
              className="btn btn-secondary"
            >
              All
            </button>) : ''
          }
      {
          AllProduct.length > 0 ? (
            
            categories.map((cat) => {

              return (
                
                <button
                  type="button"
                  onClick={() => getProductInCategory(cat)}
                  key={cat}
                  className="btn btn-secondary"
                >
                  {cat}
                </button>
             
              );
            })
            
          ) : <div></div>
        }  
</div>
</div>




        {AllProduct.length > 0 ? (

        

          AllProduct.map((el) => {
            return <Product key={el.id} elements={el} />;
          })
        ) : (
          <div className="spinner-border text-center" role="status"></div>
        )}

       


      </div>
    </div>
  );
};
export default ProcuctList;

/*
          <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={() => getProduct()}
              className="btn btn-secondary"
            >
              All
            </button>
            {categories.map((cat) => {
              return (
                <button
                  type="button"
                  onClick={() => getProductInCategory(cat)}
                  key={cat}
                  className="btn btn-secondary"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
*/
