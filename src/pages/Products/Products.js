import axios from "axios";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import HomeProducts from "../../Components/Home_Products";
import Navbar from "../../Layout/Navbar/Navbar";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQ, setSearchQ] = useState("");
  const navigate = useNavigate();
  const getProducts = async () => {
    await axios({
      url: `https://fakestoreapi.com/products`,
      method: "get",
    }).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products_root position-relative d-flex justify-content-center align-items-center flex-column">
        <div className="mt-40">
          <h1>Products</h1>
        </div>
        <button className="back_cta" onClick={()=>navigate(-1)}>
            <ArrowBack/>
        </button>
        <div className="products_search_bar">
          <input
            type="text"
            name="searc"
            id="search"
            placeholder="Search Products..."
            value={searchQ}
            onChange={(e) => setSearchQ(e.target.value)}
          />
        </div>
        <div className="home_products_main mt-40">
          <div className="row">
            {products.length > 0 ?
              products
                .filter((product) => {
                  if (product === "") {
                    return product;
                  } else {
                    return String(product.title)
                      .toLowerCase()
                      .includes(searchQ.toLowerCase());
                  }
                })
                .map((product) => (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-12 mb-24"
                    key={nanoid()}
                  >
                    <HomeProducts
                      to={"tshirts"}
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
                )) : <p>No Products here</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
