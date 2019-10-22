import {createSelector} from "reselect"

const selectCart = state=>state.cart;

export const selectCartItems = createSelector([selectCart],cart=>cart.cartItems);
export const selectIsOpen  = createSelector([selectCart],cart=>cart.isOpen);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems=>cartItems.reduce((accu, item) => accu + item.quantity, 0))
export const selectTotal = createSelector([selectCartItems], (items)=>items.reduce((acc ,item)=>acc+item.quantity*item.price,0))