import React from 'react'
import NewFoodListingsForm from './NewFoodListingsForm';
import Filter from './Filter'
import FoodListingCard from './FoodListingCard';

function FoodListingsContainer({foodListings,handleNewFood,onDelete,}){

   const foodListingsComponents = foodListings.map((foodListing) => {
       return(
           <FoodListingCard
           foodListings={foodListings}
            id={foodListing.id}
            cuisine={foodListing.cuisine}
            image = {foodListing.image}
            name= {foodListing.name}
            description = {foodListing.description}
            user = {foodListing.user}
            onDelete = {onDelete}
           />
       )
   })
    return(
        <div>
    <h1>this is the container</h1>
    <NewFoodListingsForm handleNewFood={handleNewFood}/>
    <Filter/>
    {foodListingsComponents}
    </div>
    )
}
export default FoodListingsContainer;