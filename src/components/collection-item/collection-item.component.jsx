import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
const CollectonItem = ({ id, price, name, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);
export default CollectonItem;
