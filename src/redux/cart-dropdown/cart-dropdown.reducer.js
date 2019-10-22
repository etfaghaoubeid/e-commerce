import {TOGGLE_CART,ADD_ITEM, REMOVE_ITEM,INCRESE_QUANTITY,DECRESE_QUANTITY} from "./cart-dropdown.types"

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
                cartItems: [...state.cartItems,action.payload]
            }
        case REMOVE_ITEM :
            return{
                ...state,
                cartItems: [...state.cartItems.filter(item=>action.payload!==item.id)]
            }
        case INCRESE_QUANTITY :
            return{
                ...state,
                isOpen: !state.isOpen
            }    
        case DECRESE_QUANTITY :
            return{
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state;
      }
 } 
 export default cartdropdownReducer