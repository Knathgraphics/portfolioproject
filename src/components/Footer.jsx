import arrowblack from "../assets/images/arrowblack.svg"
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
        <div className="haveaproject" id="footer">
            <h1 data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1100">Have a Project? <br /> Let's Work Together</h1>
        </div>
        <div className="foot">
        <a className="maillink" href="mailto:knatgraphics@gmail.com" target="_blank" rel="noopener noreferrer"> <h1>knathgraphics@gmail.com <span> <img className="emailarrow" src={arrowblack} alt="" /></span></h1></a>
            <ul> 
                <a id="foothref" href="http://x.com/the_mobileguy" target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
                <a id="foothref" href="http://instagram.com/nathbrandingagency" target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                <a  id="foothref" href="https://github.com/Knathgraphics" target="_blank" rel="noopener noreferrer"><li>GitHub</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer