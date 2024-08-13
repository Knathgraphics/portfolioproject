import Photo from "../assets/images/photo.png"
import Light from "../assets/images/light.png"
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <div className="hero">
      
        <div className="calltoaction" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="700">
            <h1 className="deploy">Designing <br /><span className="and">&</span> Deploying <br /> Things</h1>
            <div className="button">
            <button className="getintouch" >Get in Touch</button>
            <img src={Light} className="light" alt="" />
            <h4 className="available">Available for Hire</h4>
        </div>
        </div>

        <div className="image">
            <img  className="photo" src={Photo} alt="" />
        </div>
        
    </div>
  )
}

export default Hero