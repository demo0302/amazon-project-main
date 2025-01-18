export const cart=[{
  productId: 'a82c6bac-3067-4e68-a5ba-d827ac0be010',
  quantity: 2
},
{
  productId: 'e4f64a65-1377-42bc-89a5-e572d19252e2',
  quantity: 1
}];


export function addtoCart(productId){
      let matchingitem;
    cart.forEach((cartitem)=>{
      if(productId==cartitem.productId){
        matchingitem=cartitem;
      }
    });
    if(matchingitem){
      matchingitem.quantity+=1;
    }
    else{
    cart.push({
      productId: productId,
      quantity: 1
    })}
} 