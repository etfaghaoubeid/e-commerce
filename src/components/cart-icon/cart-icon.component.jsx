import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { toggleCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart-dropdown/cart-dropdown.selector";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = ({ toggle, numberOfItem }) => (
  <div className="cart-icon" onClick={toggle}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{numberOfItem}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCart())
});
const mapStateToProps = state => ({
  numberOfItem: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
