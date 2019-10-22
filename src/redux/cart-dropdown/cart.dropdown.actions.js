import {TOGGLE_CART,ADD_ITEM} from "./cart-dropdown.types"

export const toggleCart = ()=>(
    {
      type:TOGGLE_CART
    }
) 

export const addItemToCart =item=>(
  {
    type:ADD_ITEM,
    payload:item
  }
)