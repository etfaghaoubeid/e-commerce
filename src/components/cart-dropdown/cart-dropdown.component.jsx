import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart-dropdown/cart-dropdown.selector";
const CartDropdown = ({ items, history, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message"> Your Cart is empty </span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        {" "}
        Check Out
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  items: selectCartItems(state)
});
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CartDropdown)
);
