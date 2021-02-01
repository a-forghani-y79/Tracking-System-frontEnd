import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './projectsSliders.css'
import emptyImage from '../../../../../assets/images/Ellipse-13.svg'
function ProjectsSlider() {


    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => {
            setSuggestions(data);
          });
      }, []);

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
    
       
      };
    return (
        <>
    <div className="">
    
      {suggestions.length === 0 ? (
        <div className="spinner-border loading-animation" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="project-card">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={emptyImage}
                  height={65}
                  width={65}
                />
                <br />
                <div className="card-body">
                  <h5 className="card-title">نام پروژه</h5>
                  
                  <br />
                  
                  <a className="btn delete-btn">
                    حذف
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
        </>
    )
}

export default ProjectsSlider
