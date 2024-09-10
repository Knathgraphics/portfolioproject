// CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Port1 from "../assets/images/port1.png"
import Port2 from "../assets/images/port2.png"
import Port4 from "../assets/images/port4.png"
import Port5 from "../assets/images/port5.png"
import Port6 from "../assets/images/port6.png"
import arrowwhite from "../assets/images/arrowwhite.svg"

const Carousel = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
    };

    return (
        <div style={{ width: '100%', margin: 'auto', height:"auto" }}>
            <Slider {...settings}>


                <div>
                    <img className='carouselimage' src={Port1} alt="Slide 1" />
                    <div>
                        <h3 >Registration Form</h3>
                        <div className='projectbrief'>
                            <div> <p style={{margin:0, padding:0, fontWeight:100, color:"rgba(255, 255, 255, 0.662)"}}>Simple login form for a CodeCadem that teaches students how to code</p></div>
                            <div><a href="https://signup-plum-phi.vercel.app/"><img className='arrow' src={arrowwhite} alt="" /></a></div>
                        </div>
                    </div>
                </div>


                <div>
                <img className='carouselimage' src={Port2} alt="Slide 2" />
                <div>
                        <h3 >Snap</h3>
                        <div className='projectbrief'>
                            <div> <p style={{margin:0, padding:0, fontWeight:100, color:"rgba(255, 255, 255, 0.662)"}}>A Company that makes remote work possible no matter the location.</p></div>
                            <div><a href="https://makeremotework.vercel.app/"><img className='arrow' src={arrowwhite} alt="" /></a></div>
                        </div>
                    </div>
                </div>


                <div>
                <img className='carouselimage' src={Port4} alt="Slide 4" />
                <div>
                        <h3 >React Dashboard</h3>
                        <div className='projectbrief'>
                            <div> <p style={{margin:0, padding:0, fontWeight:100, color:"rgba(255, 255, 255, 0.662)"}}>My first React.js Project which shows a brief statistics</p></div>
                            <div><a href="https://reactdashboard-jade.vercel.app/"><img className='arrow' src={arrowwhite} alt="" /></a></div>
                        </div>
                    </div>
                </div>


                <div>
                <img className='carouselimage' src={Port5} alt="Slide 5" />
                <div>
                        <h3 >Weather Application</h3>
                        <div className='projectbrief'>
                            <div> <p style={{margin:0, padding:0, fontWeight:100, color:"rgba(255, 255, 255, 0.662)"}}>Shows real time weather data for a specific location.</p></div>
                            <div><a href="https://reactweatherapp-tau.vercel.app/"><img className='arrow' src={arrowwhite} alt="" /></a></div>
                        </div>
                    </div>
                </div>

                
                <div>
                <img className='carouselimage' src={Port6} alt="Slide 5" />
                <div>
                        <h3 >Rivo Ecommerce</h3>
                        <div className='projectbrief'>
                            <div> <p style={{margin:0, padding:0, fontWeight:100, color:"rgba(255, 255, 255, 0.662)"}}>Ecommerce application for a online clothing store.</p></div>
                            <div><a href="https://rivo-amber.vercel.app/"><img className='arrow' src={arrowwhite} alt="" /></a></div>
                        </div>
                    </div>
                </div>



            </Slider>
        </div>
    );
}

export default Carousel;
