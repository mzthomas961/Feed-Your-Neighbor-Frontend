import React, {useState} from 'react'

function NewFoodListingsForm({handleNewFood}){
    const [name,setName ] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [cuisine,setCuisine] = useState("")
  
    function handleSubmit(e){
      e.preventDefault()
      const data ={
       name:name,
       description:description,
       image:image,
       cuisine:cuisine,
       user_id: 1
      };
      console.log(data)
  
      fetch("http://localhost:3000/food_listings", {
        method: 'POST',
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      })
      .then((r)=>r.json())
      .then((newFoodObj)=>{
        handleNewFood(newFoodObj)
      })}
      return(
        <form className="new-poem-form" onSubmit={handleSubmit}>
        <input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input placeholder="desctiption" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <input placeholder="image" value={image} onChange={(e)=> setImage(e.target.value)}/>
        <input placeholder="Cuisine" value={cuisine} onChange={(e)=> setCuisine(e.target.value)}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
      )}


export default NewFoodListingsForm