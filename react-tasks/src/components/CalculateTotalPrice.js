

// function calculateCartTotal(product){
//      let total=product.reduce((acc,item)=> acc+item.prod_price,0 )
//      console.log('total: ',total)
//      return total
// }


export const CalculateTotalPrice = (state, action) => {
  console.log('state',state,action.payload.prod_price)
  switch (action.type) {
    case "ADD":
     
         let total1=state+action.payload.prod_price
         console.log('total1:',total1)
         return total1;
     
    
    default:
      return state;
  }

}

