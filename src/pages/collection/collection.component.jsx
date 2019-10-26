import React from "react";
import { connect } from "react-redux";

import { selectCollectionItem } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
import CollectonItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectonItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownprops) => ({
  collection: selectCollectionItem(ownprops.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
