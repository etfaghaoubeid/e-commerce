import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectIsOpen } from "../../redux/cart-dropdown/cart-dropdown.selector";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";
const Header = ({ currentUser, isOpen, toggle }) => (
  <HeaderContainer>
    {isOpen ? <CartDropdown /> : null}
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer className="options">
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SiGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
);
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   isOpen: selectIsOpen(state)
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isOpen: selectIsOpen
});

export default connect(
  mapStateToProps,
  null
)(Header);
