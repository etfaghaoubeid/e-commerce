
import {UPDATE_COLLECTION} from "./shop.types"
const initState={
    collections: null

}
const shopReducer = (state= initState, action)=>{
    switch(action.type){
        case UPDATE_COLLECTION:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}
export default shopReducer ;