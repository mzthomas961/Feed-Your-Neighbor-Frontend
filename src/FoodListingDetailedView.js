import React, {useState} from 'react' 
import TradeOfferForm from './TradeOfferForm'
import EditFoodListingForm from './EditFoodListingForm'

function FoodListingDetailedView({description, user,cuisine,foodListings,id, handleUpdateRender}){
    console.log(foodListings)
    const [buyerFoodID, setBuyerFoodID] = useState('');

    function handleChange(e)
    {
        setBuyerFoodID(e.target.value)
    }
    function handleNotificationSubmit(e){
        e.preventDefault()
        const data = {
            seller_foodListing_id: id,
            buyer_foodListing_id:buyerFoodID

        }
        fetch("http://localhost:3000/trades", {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
          })
          .then((r)=>r.json())
          .then((newTrade)=>{
            console.log(newTrade)
          })
    }


    return(
        <div>
            <h2>Seller: {user.name}</h2>
            <h3>Cuisine: {cuisine}</h3>
            <section>Description:{description}</section>
            <EditFoodListingForm id={id} user={user} handleUpdateRender = {handleUpdateRender}/>
            <form onSubmit={handleNotificationSubmit}>
            <label>Choose an item to trade!</label>
            <select value={buyerFoodID} onChange={handleChange}>
                {foodListings.map(foodListing => {
                    return <option value = {foodListing.id}> 
                        {foodListing.name}
                    </option>
                })}
            </select>
            <input type='submit' value = 'submit'></input>
            </form>
        </div>
    )

}
export default FoodListingDetailedView;