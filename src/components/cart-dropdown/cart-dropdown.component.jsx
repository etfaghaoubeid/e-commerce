import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart-dropdown/cart-dropdown.selector";
import { toggleCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
const CartDropdown = ({ items, history, toggleCart, ...otherProps }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message"> Your Cart is empty </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      >
        {" "}
        Check Out
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  items: selectCartItems(state)
});
const mapDispatchToprops = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToprops
  )(CartDropdown)
);
