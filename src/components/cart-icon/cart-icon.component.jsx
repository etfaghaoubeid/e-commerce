import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { toggleCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = ({ toggle }) => (
  <div className="cart-icon" onClick={toggle}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCart())
});
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
