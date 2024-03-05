import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Components/CartCard";
import {
  addtoCart,
  clearCart,
  deleteItem,
  getItems,
  removeFromCart,
} from "../../fearures/itemsSlice";
import Navbar from "../../Layout/Navbar/Navbar";
import "./cart.css";

const Cart = () => {
  const allItems = useSelector(getItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="cart_root">
      <Navbar />
      <div className="cart_main position-relative d-flex align-items-center justify-content-center">
        <button className="back_cta" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
        <div className="home_products_main mt-40">
          <div className="d-flex justify-content-end">
            <button
              className="clear_cart_btn mb-40"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
          {allItems && allItems.length > 0 ? (
            allItems.map((item, i) => (
              <CartCard
                key={item.id}
                index={i}
                name={item.title}
                category={item.category}
                quantity={item.quantity}
                addFunc={() => dispatch(addtoCart(item))}
                removeFunc={() => dispatch(removeFromCart(item.id))}
                deleteItem={() => dispatch(deleteItem(item.id))}
                item={item}
              />
            ))
          ) : (
            <div>
              <h4>Cart is Empty</h4>
              <div className="product_page_addtc mt-16">
                <button onClick={()=>navigate(`/products`)}>Go to Products</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
