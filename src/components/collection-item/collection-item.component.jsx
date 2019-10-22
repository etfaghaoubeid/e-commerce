import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import { addItemToCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
import { connect } from "react-redux";
const CollectonItem = ({ item, addItem }) => {
  const { id, price, name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchTOProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});
export default connect(
  null,
  mapDispatchTOProps
)(CollectonItem);
