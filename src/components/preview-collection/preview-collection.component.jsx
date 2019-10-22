import React from "react";
import "./preview-collection.styles.scss";
import CollectonItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ id, title, items }) => (
  <div className="collection-preview" key={id}>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectonItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default PreviewCollection;
