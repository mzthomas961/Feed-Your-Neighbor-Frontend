import React, {useState} from 'react' 
import FoodListingDetailedView from './FoodListingDetailedView'
import TradeOfferForm from './TradeOfferForm'

function FoodListingCard({onDelete,id,image,name,description, user,cuisine,foodListings}){
    const [hidden, setHidden] = useState(true)
    function handleFoodDelete(e){
        console.log(id)
        fetch(`http://localhost:3000/food_listings/${id}`,{
            method: 'DELETE'
          })

          onDelete(id)
    }
    function handleDetails(){
        setHidden(!hidden)
      }
    return(
        <div>
            <h1>{name}</h1>
            <img src = {image} width="200" height="300" />
            <button onClick={handleFoodDelete}>Delete Food</button>
            <button  onClick={handleDetails}>Show Details </button>
            {hidden? null: <FoodListingDetailedView image = {image} name = {name} description = {description} user={user} cuisine={cuisine} foodListings={foodListings}/>}
        </div>
    )
}
export default FoodListingCard;