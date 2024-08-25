export const cart = [];
export function AddToCart (productId, quantiteSelecteur){
    let matchingItem;
  
      cart.forEach((cartItem) => {
         
          if (productId === cartItem.productId){
  
              matchingItem = cartItem 
          }
      })
    
      if (matchingItem){
          matchingItem.quantity += quantiteSelecteur
      }
   
      else {
          cart.push({
              productId : productId,
              quantity : quantiteSelecteur 
          })
      }
  }
