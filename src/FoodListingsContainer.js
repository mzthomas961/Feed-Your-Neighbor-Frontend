import React from 'react'
import NewFoodListingsForm from './NewFoodListingsForm';
import Filter from './Filter'
import FoodListingCard from './FoodListingCard';

function FoodListingsContainer(){
    return(
        <div>
    <h1>this is the container</h1>
    <NewFoodListingsForm/>
    <Filter/>
    <FoodListingCard/>
    </div>
    )
}
export default FoodListingsContainer;