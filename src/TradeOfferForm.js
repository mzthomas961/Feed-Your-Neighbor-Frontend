import React from 'react'

function TradeOfferForm(foodListings){
   const array1 = [0,1,2,3]
   console.log(foodListings)

  
    return(
        <div>
        <select
        >{array1.map(number => {
            return <option> 
                {number}
                 </option>
        })}    </select>
            
        </div>
    )
}
export default TradeOfferForm;