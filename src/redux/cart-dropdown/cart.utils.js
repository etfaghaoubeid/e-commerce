export const addItemValidatore = (items, itemToAdd)=>{
    const isExist = items.find(item=>item.id===itemToAdd.id);
    if(isExist){
        return items.map(item=>
            item.id === itemToAdd.id ? {...item ,quantity:item.quantity +1}: item
        )
    }
    return [...items , {...itemToAdd ,quantity:1}]
}

export const decreaseOrRemoveItem = (cartItems, itemToRemove)=>{
    if(itemToRemove.quantity===1){
         return cartItems.filter(element=> element.id !==itemToRemove.id)
     }
     return cartItems.map(element=>element.id === itemToRemove.id?{...element, quantity:element.quantity -1} :element)
    
} 

export const increaseCartItemQuantity = (cartItems, itemToIncreseQuantity)=>{

     return cartItems.map(element=>element.id === itemToIncreseQuantity.id?{...element, quantity:element.quantity +1} :element)
    
} 