import React from "react";
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from "./collection.tem.styles";
import { addItemToCart } from "../../redux/cart-dropdown/cart.dropdown.actions";
import { connect } from "react-redux";
const CollectonItem = ({ item, addItem }) => {
  const { price, name, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchTOProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});
export default connect(
  null,
  mapDispatchTOProps
)(CollectonItem);
