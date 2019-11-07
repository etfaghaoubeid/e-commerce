
import {UPDATE_COLLECTION} from "./shop.types"
export const updateCollection =  collectionMap =>{
    return{
        type:UPDATE_COLLECTION,
        payload:collectionMap

    }

} 