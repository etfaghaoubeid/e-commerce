import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/preview-collection.component";
import {
  selectCollection,
  selectCollectionsForPreview
} from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOvereview = ({ collections }) => (
  <div className="collections-preview">
    {collections.map(({ id, ...otherCollectionPorps }) => (
      <PreviewCollection key={id} {...otherCollectionPorps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOvereview);
