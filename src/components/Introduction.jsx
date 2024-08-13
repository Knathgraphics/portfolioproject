import Techstack from "../assets/images/techstack.png"
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {

  useEffect(() => {
    AOS.init(
      {once:true,}
    );
  }, []);
  
  return (
    <div className="introduction">
        <div className="introduce" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="700">
            <h2>👋 Hi, I'm Olutuyo Pelumi  a  Passionate Programmer based in Lagos.</h2>
            <p>An expertise in web development, software engineering. I thrive on solving complex problems and building efficient, scalable solutions. I enjoy working with technologies like JavaScript, React, Node.js and i am always eager to learn and adapt to new challenges. Let's create something amazing together!</p>
        </div>
        <div className="teckstack" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="900">
            <img className="tech" src={Techstack} alt="" />
        </div>
    </div>
  )
}

export default Introduction