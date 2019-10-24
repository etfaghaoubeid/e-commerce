import {TOGGLE_CART,ADD_ITEM,REMOVE_ITEM,INCRESE_QUANTITY,DECRESE_QUANTITY} from "./cart-dropdown.types"

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

export const increseQuantiy =item=>(
  {
    type:INCRESE_QUANTITY,
    payload:item
  }
)

export const decreseQuantiy =item=>(
  {
    type:DECRESE_QUANTITY,
    payload:item
  }
)