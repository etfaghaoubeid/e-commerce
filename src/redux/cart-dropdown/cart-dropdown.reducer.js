import {TOGGLE_CART,ADD_ITEM, REMOVE_ITEM,INCRESE_QUANTITY,DECRESE_QUANTITY} from "./cart-dropdown.types"
import {addItemValidatore,decreaseOrRemoveItem,increaseCartItemQuantity} from "./cart.utils"
const initState = {
    isOpen:false,
    cartItems:[]
}
  const cartdropdownReducer  = (state = initState, action )=>{
      switch(action.type){
        case TOGGLE_CART :
            return{
                ...state,
                isOpen: !state.isOpen
            }
            
        case ADD_ITEM :
            return{
                ...state,
                cartItems: addItemValidatore(state.cartItems , action.payload)
            }
        case REMOVE_ITEM :
            return{
                ...state,
                cartItems: [...state.cartItems.filter(item=>action.payload!==item.id)]
            }
        case INCRESE_QUANTITY :
            return{
                ...state,
                cartItems: increaseCartItemQuantity(state.cartItems,action.payload)
            }    
        case DECRESE_QUANTITY :
            return{
                ...state,
                cartItems: decreaseOrRemoveItem(state.cartItems,action.payload)
            }
        default:
            return state;
      }
 } 
 export default cartdropdownReducer