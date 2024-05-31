import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container-fluid text-center my-5 py-5" id="about">
      <h3 className="heading_3_py-5 ">
        About <span>Mee</span>!
      </h3>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <img 
              src="../src/assets/project 6.jpg"
              alt="naveen_kumar"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-12 col-lg-7 mx-3 pl-5 aboutRight">
            <h4 className="mt-5">Naveen_kumar</h4>
            <h6 className=" heading_6_mt-4 mb-5">
              <i>
                Frontend <span>Developer</span>!
              </i>
            </h6>
            <p className=" paragraph_py-2">
              I'm a frontend developer eager to grow into Full-Stack
              Development. I'm skilled in HTML, CSS, Bootstrap, JavaScript, and
              React, with a keen interest in learning more. I'm committed to
              honing my abilities in these areas.
            </p>
            <p className="py-2">
              If you're in need of a motivated front-end developer, I'm here and
              ready to contribute. I'm excited about opportunities to broaden my
              skills and make meaningful contributions to projects. Let's work
              together!
            </p>
            <button href="#" className="button mt-3 mb-4">
              Read More...😉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;