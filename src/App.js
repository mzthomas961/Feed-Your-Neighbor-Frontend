import React, { useEffect, useState } from "react";import './App.css';
import User from './User'
import FoodListingsContainer from './FoodListingsContainer'

function App() {  
  const [foodListings,setFoodListings] = useState([])
  const [users,setUsers] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(usersArr => {
        setUsers(usersArr)
    })
},[]);

const userComponents = users.map((user) => {
  return (
    <User
    userName = {user.name}
    borough = {user.borough}
    />
  )
})

useEffect(() => {
  fetch("http://localhost:3000/food_listings")
  .then(r => r.json())
  .then(foodArr => {
      setFoodListings(foodArr)
  })
},[]);

function handleNewFood(newFood){
  const newFoods= [...foodListings,newFood]
  setFoodListings(newFoods)
}
function onDelete(id){
  const updatedFood = foodListings.filter(food => food.id !== id)
  setFoodListings(updatedFood)
}
  return (
    <div>
      {userComponents}
    <FoodListingsContainer foodListings={foodListings} handleNewFood={handleNewFood} onDelete={onDelete} />
    </div>
  );
}

export default App;
