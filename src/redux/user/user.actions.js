import {SET_CURRENT_USER} from "./user.types"

export const  getCurrentUser = user =>(
    {
        type:SET_CURRENT_USER,
        payload:user
    }
)