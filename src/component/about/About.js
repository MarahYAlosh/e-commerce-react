import React from 'react'
import image from '../../imgs/about.jpg'
import './About.css'
export const About = () => {
  return (

<div className='container'>
<section className="about-us">
        <div className="about">
          <img src={image} className="pic" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Online Shopping</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
            <div className="data">
              <a href="#" className="hire">Learn More</a>
            </div>
          </div>
        </div>
      </section>
</div>
  )
}
