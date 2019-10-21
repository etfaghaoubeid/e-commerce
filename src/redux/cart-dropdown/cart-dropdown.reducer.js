import {TOGGLE_CART} from "./cart-dropdown.types"

const initState = {
    isOpen:false
}
  const cartdropdownReducer  = (state = initState, action )=>{
      switch(action.type){
          case TOGGLE_CART :
              return{
                  ...state,
                  isOpen: !state.isOpen
              }
          default:
              return state;
      }
 } 
 export default cartdropdownReducer