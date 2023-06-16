import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../store/slices/cartSlices";

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  // menonaktifkan gulir body saat keranjang terbuka
  useEffect(() => {
    const docBody = document.body;

    isCartOpen
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isCartOpen]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.kalori * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>
      {isCartOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Keranjang <small>({cartQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleCloseCart(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {cartQuantity === 0 ? (
                <h2>Keranjang kosong</h2>
              ) : (
                cartItems.map((item) => {
                  const { id, img, title, kalori, quantity } = item;
                  const itemTotal = kalori * quantity;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="product-img" />
                      </figure>

                      <div className="cart_items_info">
                        <h4>{title}</h4>

                        <h6 className="kalori">
                          {" "}
                          {kalori.toLocaleString()} kal / 100 gram
                        </h6>
                        <h4 className="nilai_kalori">
                          {" "}
                          {itemTotal.toLocaleString()} kalori
                        </h4>
                      </div>

                      <div className="cart_items_quantity">
                        <span onClick={() => handleDecrement(id)}>&#8722;</span>
                        <b>{quantity}</b>
                        <span onClick={() => handleIncrement(id)}>&#43;</span>
                      </div>

                      <div
                        title="Hapus Item"
                        className="cart_items_delete"
                        onClick={() => handleRemove(id)}
                      >
                        <span>Hapus</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="cart_foot">
              <h3>
                <small>Total:</small>
                <b>{cartTotal.toLocaleString()} kalori</b>
              </h3>

              <button
                type="button"
                className="checkout_btn"
                disabled={cartQuantity === 0}
              >
                Hitung Karbon
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
