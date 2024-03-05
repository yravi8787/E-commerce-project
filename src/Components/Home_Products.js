import { StarOutline } from "@mui/icons-material";
import React from "react";
// import { Link } from "react-router-dom";

const Home_Products = ({ img, title, desc, rating, price, handleFunc }) => {
  return (
    <div className="home_product_card" onClick={handleFunc}>
      <div className="home_prd_img">
        <img src={img} alt="glass" />
      </div>
      <div className="home_prd_title text-center">
        <h5 className="text-overflow1">{title}</h5>
        <p className="caption mt-8">{desc}</p>
        <div className="mt-16 d-flex align-items-center justify-content-between pr-10 pl-10">
          <p className="body2 d-flex align-items-center ">
            <span className="ml-12">
              <StarOutline />
            </span>
            {rating && rating}
          </p>
          <p className="body2 d-flex align-items-center ">₹{price && price}</p>
        </div>
        {/* <div className="mt-12 d-flex align-items-center product_">
            <input type="number" />
            <button>Add to cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default Home_Products;
