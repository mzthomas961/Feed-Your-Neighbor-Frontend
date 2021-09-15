import React from 'react'
import NewFoodListingsForm from './NewFoodListingsForm';
import Filter from './Filter'
import FoodListingCard from './FoodListingCard';
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

function FoodListingsContainer({foodListings,handleNewFood,onDelete,handleUpdateRender,setSearch,search,handleNewTrade,currentUser}){
    const filteredListingComponents=foodListings && foodListings.filter(listing => {
        return  listing && (listing.name.includes(search))
      })
      console.log(foodListings)

  const foodListingsComponents = filteredListingComponents?.map((foodListing) => {

       return(
           <FoodListingCard
           currentUser={currentUser}
           foodListings={foodListings}
            id={foodListing.id}
            cuisine={foodListing.cuisine}
            image = {foodListing.image}
            name= {foodListing.name}
            description = {foodListing.description}
            user = {foodListing.user}
            onDelete = {onDelete}
            handleUpdateRender={handleUpdateRender}
            handleNewTrade={handleNewTrade}
           />
           
       )
       
   })
   console.log(foodListings)

    return(
        <div>
     <Filter search = {search} setSearch = {setSearch} />
     <NewFoodListingsForm handleNewFood={handleNewFood}/>

     <Container>
         
     <CardDeck  style={{
          display: "grid",
          gridTemplateColumns: "350px 350px 350px",
          margin: "15px 15px 15px 15px",
        }}>

     {foodListingsComponents})
     </CardDeck>
     </Container>

     </div>)
    
}
export default FoodListingsContainer;