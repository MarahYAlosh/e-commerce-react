import React from 'react'
import './Header.css';
import logo from '../../imgs/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  
  return (
  
    
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
               <img  className="navbar-toggler-icon" src={logo} />
               </a>
              <button className="navbar-toggler" type="button"
               data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false"
                 aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ScrollHeight: '100px'}}>
                  <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                      Home
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="about" tabIndex="-1" aria-disabled="true">
                      About
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="profile">
                      Profile
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">
                      Login
                  </Link>
                  </li>

                  <li className="nav-link icon-shop">
                
                      <Link to="purchase" className="nav-link">
                      <i className="gg-shopping-cart"></i>
                      </Link>
 
                  </li>
                 
                </ul>
                
              </div>
            </div>
          </nav>
        );




//  <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//   <a className="navbar-brand m-4" href="#">
//     <img  class="navbar-toggler-icon" src={logo}
//       alt=""
//     />
//     {/*  */}
//   </a>
    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
          // <Link className="nav-link active" aria-current="page" to="/">
          //   Home
          // </Link>
//         </li>
//         <li className="nav-item">
          // <Link className="nav-link disabled" to="about" tabindex="-1" aria-disabled="true">
          //   About
          // </Link>
//         </li>
      // </ul>
      // <form className="d-flex">
      //   <input
      //     className="form-control me-2"
      //     type="search"
      //     placeholder="Search"
      //     aria-label="Search"
      //   />
      //   <button className="btn btn-outline-success" type="submit">
      //     Search
      //   </button>
      // </form>
  //      <div className='icon-shop'>
  //     <Link to='purchase'>
  //     <i className="gg-shopping-cart"></i>
  //     </Link>
  
  //  </div> 
//     </div>
//   </div>
// </nav>
   
  
}
export default Header