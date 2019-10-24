import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  decreseQuantiy,
  increseQuantiy
} from "../../redux/cart-dropdown/cart.dropdown.actions";
const CheckoutItem = ({
  cartItem,
  removeCartItem,
  increseQuantiy,
  decreseQuantiy
}) => {
  const { imageUrl, price, name, quantity, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreseQuantiy(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increseQuantiy(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10006;
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  removeCartItem: id => dispatch(removeItemFromCart(id)),
  decreseQuantiy: item => dispatch(decreseQuantiy(item)),
  increseQuantiy: item => dispatch(increseQuantiy(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
