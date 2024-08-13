import companiesImage from "../assets/images/companies.png"
import Carousel from "./Carousel"
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Companies = () => {
    useEffect(() => {
        AOS.init({
          once: true, // Whether animation should happen only once
        });
      }, []);
    

  return (
    <div className="maincompany">
         <h2 style={{textAlign:"center", fontWeight:100, margin:"20px 0"}}>Portfolio & Projects</h2>
        <div className="clients">
            <div className="caption" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="700">
                <h1>Clients &  Companies <br />  I've Worked With </h1>
                <p>Throughout my career, I've had the opportunity to work with diverse companies across various industries, from tech startups to established enterprises. My roles have allowed me to contribute to a wide range of projects, including developing cutting-edge software, optimizing system performance, and enhancing user experience.</p>
            </div>
            <div className="details" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="700">
            <Carousel/>
            </div>
        </div>
        <div className="comlogo">
        <img className="companies" src={companiesImage} cl alt="" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="1000" />
        </div>
           

            <div className="gooddesign">
                <h1>"Good Design is a Language not a Style"</h1>
                <h4>-Massimo Vignelli</h4>
            </div>
    </div>
  )
}

export default Companies