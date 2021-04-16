import React, {useState} from 'react' 
import FoodListingDetailedView from './FoodListingDetailedView'
import TradeOfferForm from './TradeOfferForm'
import EditFoodListingForm from './EditFoodListingForm'

function FoodListingCard({onDelete,id,image,name,description, user,cuisine,foodListings,handleUpdateRender}){

    const [hidden, setHidden] = useState(true)
    function handleFoodDelete(e){
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
            {hidden? null: <FoodListingDetailedView id={id} description = {description} user={user} cuisine={cuisine} foodListings={foodListings}  handleUpdateRender = {handleUpdateRender} />}
        </div>
    )
}
export default FoodListingCard