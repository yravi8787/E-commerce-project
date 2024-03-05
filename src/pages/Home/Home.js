import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import Cover from "../../Assets/Images/cover.jpg";
import "./home.css";
import axios from "axios";
import HomeProducts from "../../Components/Home_Products";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const getCategories = async () => {
    await axios({
      url: `https://fakestoreapi.com/products?limit=6`,
      method: "get",
    }).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="home_root">
      <Navbar />
      <div className="home_cover">
        <img src={Cover} alt="cover" />
      </div>
      <div className="home_products">
        <div className="mt-40">
          <h1>Products</h1>
        </div>
        <div className="home_products_main mt-40">
          <div className="row">
          <div className="row">
            {products.length > 0 &&
              products.map((product) => (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-12 mb-24"
                    key={nanoid()}
                  >
                    <HomeProducts
                      img={product.image}
                      title={product.title}
                      desc={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique."
                      }
                      rating={product.rating.rate}
                      price={product.price}
                      handleFunc={() => navigate(`/product/${product.id}`)}
                    />
                  </div>
                ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
