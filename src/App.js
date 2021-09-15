import React, { useEffect, useState } from "react";
import './App.css';
import User from './User'
import FoodListingsContainer from './FoodListingsContainer'
import Trades from './Trades'

function App() {  
  const [foodListings,setFoodListings] = useState([])
  const [users,setUsers] = useState([])
  const [search,setSearch] = useState("")
  const [trades, setTrades] = useState([])
  const currentUser = 1
  console.log(currentUser)

  useEffect(() => {
    fetch('http://localhost:3000/trades')
    .then(r => r.json())
    .then(tradesObj => {
        setTrades(tradesObj)
    })
},[]);  
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
function handleUpdateRender(updatedFood){
  const updatedFoods = foodListings.filter(
  (foodListing) =>foodListing.id !== updatedFood.id)
  const a = [...updatedFoods, updatedFood]
  setFoodListings(a)
}
function onTradeDelete(id){
  const updatedTrades = trades.filter(trade => trade.id !== id)
  setTrades(updatedTrades)
}
function handleNewTrade(newTrade){
  const newTrades= newTrade && [...trades,newTrade]
  setTrades(newTrades)
}

  return (
    <div>
      <h1>Logged in as: Matt</h1>
          <Trades trades={trades} onTradeDelete={onTradeDelete} />
    <FoodListingsContainer foodListings={foodListings} 
    currentUser={currentUser}
    handleNewTrade={handleNewTrade}
     handleNewFood={handleNewFood}
     onDelete={onDelete} 
    handleUpdateRender = {handleUpdateRender}
    search = {search}
    setSearch = {setSearch}/>
    </div>
  );
}

export default App;
