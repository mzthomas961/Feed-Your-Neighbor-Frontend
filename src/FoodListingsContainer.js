import React from 'react'
import NewFoodListingsForm from './NewFoodListingsForm';
import Filter from './Filter'
import FoodListingCard from './FoodListingCard';

function FoodListingsContainer({foodListings,handleNewFood,onDelete,handleUpdateRender,setSearch,search}){
    const filteredListingComponents=foodListings.filter(listing => {
        return listing.name.includes(search)
      })

   const foodListingsComponents = filteredListingComponents.map((foodListing) => {

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
            handleUpdateRender={handleUpdateRender}
           />
       )
       
   })
   console.log(foodListings)

    return(
        <div>
    <NewFoodListingsForm handleNewFood={handleNewFood}/>
    <Filter search = {search} setSearch = {setSearch}/>
    {foodListingsComponents}
    </div>
    )
}
export default FoodListingsContainer;