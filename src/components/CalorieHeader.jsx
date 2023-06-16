import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/cartSlices";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <div className="fs-3 fw-bold">
              <img src={Logo} alt="" />
            </div>

            <div className="nav_menu">
              <div
                title="Cart"
                className="cart_icon"
                onClick={() => handleOpenCart(true)}
              >
                <img src="/images/bag-icon.svg" alt="bag-icon" />
                <span className="badge">{cartQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
