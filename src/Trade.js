import React from 'react' 

function Trade({trade,id, onTradeDelete}){
    function handleTradeDelete(e){
        e.preventDefault()
        fetch(`http://localhost:3000/trades/${id}`,{
            method: 'DELETE'
          })
          onTradeDelete(id)
        }


     

    
    return(
    <div>
        {trade.buyer_foodListing.name}
        <button onClick={handleTradeDelete}>Delete Trade</button>


    </div>
    )
}
export default Trade