import React from 'react'
import CoffeeImg from "../assets/images/coffee.jpg"
import CoffeeImg2 from "../assets/images/coffe.jpg"
import CoffeeImg3 from "../assets/images/Latte.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
export default function HomePage() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const Coffees=[
    {img:CoffeeImg , Price: 250},
    {img:CoffeeImg2 , Price: 200},
    {img:CoffeeImg3 , Price: 150}
  ]
  return (
    <div>
        <h1>Welcome to HomePage</h1>
        <Slider {...settings}>
          {Coffees.map((coffee,index)=>(
            <div key={index} className='img-box'>
              <img src={coffee.img} alt={`coffee ${index+1}`} />
              <p className='caption'>Coffee</p>
              <p className='Price'>Price :{coffee.index}tk</p>
            </div>
          ))}
        </Slider>
    </div>
  )
}
