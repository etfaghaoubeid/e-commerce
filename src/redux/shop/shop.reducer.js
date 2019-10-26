
import shopCollection from "./shop.data"
const initState={
    collections: shopCollection,

}
const shopReducer = (state= initState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default shopReducer ;