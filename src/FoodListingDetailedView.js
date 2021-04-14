import React from 'react' 
import TradeOfferForm from './TradeOfferForm'

function FoodListingDetailedView({image,name,description, user,cuisine,foodListings}){
    return(
        <div>
            <h2>Seller: {user.name}</h2>
            <h3>Cuisine: {cuisine}</h3>
            <section>Description:{description}</section>
            <TradeOfferForm/>
        </div>
    )
}
export default FoodListingDetailedView;