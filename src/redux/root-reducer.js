import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartdropdownReducer from "./cart-dropdown/cart-dropdown.reducer"


export default combineReducers({
   user:userReducer,
   cart :cartdropdownReducer
})