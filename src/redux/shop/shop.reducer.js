
import {FETCH_COLLECTIONS_START ,
 FETCH_COLLECTIONS_SUCCESS ,
 FETCH_COLLECTIONS_FAILURE } from "./shop.types";
const initState={
    collections: null,
    isFetching:false,
    errorMessage:''

}
const shopReducer = (state= initState, action)=>{
    switch(action.type){
        case FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                collections:action.payload,
                isFetching:false 
            } 
        case FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}
export default shopReducer ;