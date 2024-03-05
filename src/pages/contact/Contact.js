import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import "./contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact_root">
      <Navbar />
      <div className="product_page_main position-relative d-flex align-items-center justify-content-center">
        <button className="back_cta" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
        <div className="home_products_main mt-40">
          <form className="d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="contact_input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact_input"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_textarea"
              placeholder="Your Query..."
            ></textarea>
            <div className="product_page_addtc">
              <button className="">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
