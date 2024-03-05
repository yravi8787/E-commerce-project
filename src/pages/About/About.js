import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Mine from "../../Assets/Images/mine.jpg"

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="contact_root">
      <Navbar />
      <div className="product_page_main position-relative d-flex align-items-center justify-content-center">
        <button className="back_cta" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
        <div className="home_products_main mt-40">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="body1">
                Hello, I'm Aman Gupta. I am Software Developer. As a Software
                developer, I have in-depth knowledge of Web development and App
                Development. I have working experience of Web development. I
                have in-depth knowledge of React js, Mongo Db, Express js, Next
                js, HTML/CSS and javascript and as well as React native for App
                development.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img src={Mine} alt="mine" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
