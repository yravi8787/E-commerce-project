import { ArrowBack } from "@mui/icons-material";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addtoCart,
  getItemByID,
  //   getItems,
  removeFromCart,
} from "../../fearures/itemsSlice";
import Navbar from "../../Layout/Navbar/Navbar";
import { disableRemove } from "../../utils/DisableRemove";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allItems = useSelector((state) => getItemByID(state, id));
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      await axios({
        url: `https://fakestoreapi.com/products/${id}`,
        method: "get",
      }).then((res) => {
        setProduct(res.data);
      });
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    disableRemove(allItems, setDisable);
  }, [allItems]);

  return (
    <div className="product_page_root">
      <Navbar />
      <div className="product_page_main position-relative d-flex align-items-center justify-content-center">
        <button className="back_cta" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
        <div className="home_products_main mt-40">
          {product ? (
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-5 col-12">
                <div className="product_page_image">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-7 col-12">
                <div>
                  <p className="body2 color_dark_grey">{product.category}</p>
                  <h4 className="mt-12">{product.title}</h4>
                  <div className="mt-12 d-flex align-items-center">
                    <Rating value={product.rating.rate} readOnly precision={0.5} />
                    <p className="body2 ml-12">
                      {product.rating.count} Reviews
                    </p>
                  </div>
                  <p className="body2 mt-16">{product.description}</p>
                  <p className="mt-12 body2">₹{product.price}</p>
                  <div className="mt-16 product_page_addtc">
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(product.id));
                      }}
                      className="mr-12"
                      disabled={disable}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      placeholder="0"
                      className="body1"
                      value={allItems?.quantity ? allItems?.quantity : 0}
                    />
                    <button
                      onClick={() => {
                        dispatch(addtoCart(product));
                      }}
                      className="ml-12"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : <CircularProgress/>}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
