import React from 'react' 
import Button from 'react-bootstrap/Button';

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
       <h1> {trade.buyer_foodListing.user.name}'s {trade.buyer_foodListing.name} for {trade.seller_foodListing.user.name}'s {trade.seller_foodListing.name} </h1>
       <h2>Contact Info: {trade.seller_foodListing.user.name}@gmail.com</h2>
        <Button variant="danger" onClick={handleTradeDelete}>Cancel Trade?</Button>


    </div>
    )
}
export default Trade