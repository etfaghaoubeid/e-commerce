import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
const CheckoutItem = ({
  cartItem: { imageUrl, price, name, quantity, id },
  removeCartItem
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <span className="quantity">{quantity}</span>
    <div className="remove-button" onClick={() => removeCartItem(id)}>
      &#10006;
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  removeCartItem: id => dispatch(removeItemFromCart(id))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
