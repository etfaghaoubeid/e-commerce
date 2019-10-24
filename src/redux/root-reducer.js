import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user.reducer";
import cartdropdownReducer from "./cart-dropdown/cart-dropdown.reducer"
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const configPersist = {
   key: "root",
   storage,
   whitelist:["cart","shop"]
}
const rootReducer = combineReducers({
   user:userReducer,
   cart :cartdropdownReducer,
   sections: directoryReducer,
   shop: shopReducer,
})
export default persistReducer(configPersist,rootReducer  );