import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { disableRemove } from "../utils/DisableRemove";

const CartCard = ({
  name,
  index,
  category,
  quantity,
  addFunc,
  removeFunc,
  item,
  deleteItem,
}) => {
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    disableRemove(item, setDisable);
  }, [item]);
  return (
    <div className="cart_card_root d-flex align-items-center justify-content-between flex-lg-row flex-md-row flex-column">
      <div className="mr-12">
        <p className="body1">
          {index + 1}. {name}
        </p>
        <p className="caption">({category})</p>
      </div>
      <div className="d-flex align-items-center mt-lg-0 mt-md-0 mt-40">
        <div className="product_page_addtc">
          <button onClick={removeFunc} className="mr-12" disabled={disable}>
            -
          </button>
          <input
            type="number"
            placeholder="0"
            className="body1"
            value={quantity}
          />
          <button onClick={addFunc} className="ml-12">
            +
          </button>
        </div>
        <button className="ml-16 cart_card_deleteBTn" onClick={deleteItem}>
          <DeleteOutline fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
