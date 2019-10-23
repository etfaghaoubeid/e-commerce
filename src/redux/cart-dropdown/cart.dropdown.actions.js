import {TOGGLE_CART,ADD_ITEM,REMOVE_ITEM} from "./cart-dropdown.types"

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
export const removeItemFromCart =id=>(
  {
    type:REMOVE_ITEM,
    payload:id
  }
)