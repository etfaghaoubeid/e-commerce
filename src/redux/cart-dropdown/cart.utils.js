export const addItemValidatore = (items, itemToAdd)=>{
    const isExist = items.find(item=>item.id===itemToAdd.id);
    if(isExist){
        return items.map(item=>
            item.id === itemToAdd.id ? {...item ,quantity:item.quantity +1}: item
        )
    }
    return [...items , {...itemToAdd ,quantity:1}]
}