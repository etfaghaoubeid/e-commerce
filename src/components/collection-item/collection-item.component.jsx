import React from "react";
import "./collection-item.styles.scss";
const CollectonItem = ({ id, price, name, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
export default CollectonItem;
