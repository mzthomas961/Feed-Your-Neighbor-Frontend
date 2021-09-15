import React, {useState} from 'react' 
import EditFoodListingForm from './EditFoodListingForm'

function FoodListingDetailedView({currentUser, description, user,cuisine,foodListings,id, handleUpdateRender,handleNewTrade}){
 
    const [buyerFoodID, setBuyerFoodID] = useState('');
    console.log(buyerFoodID)

    function handleChange(e)
    {
        setBuyerFoodID(e.target.value)
    }
    function handleNotificationSubmit(e){
        e.preventDefault()
        const data = {
            seller_foodListing_id: id,
            buyer_foodListing_id:buyerFoodID

        }
        fetch("http://localhost:3000/trades", {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
          })
          .then((r)=>r.json()) 
          .then((newTrade)=>{
            handleNewTrade(newTrade)
          })

    }
    const userTruth=(currentUser === user.id)

    const userFoods = foodListings.filter(food =>{
        return food.user.id === currentUser
    })
    console.log(user.id)


    return(
        <div>
            <h2>Seller: {user.name}</h2>
            <h3>Cuisine: {cuisine}</h3>
            <section>Description:{description}</section>
            {userTruth && <EditFoodListingForm id={id} user={user} handleUpdateRender = {handleUpdateRender}/>}
            <form onSubmit={handleNotificationSubmit}>
            <label>Choose an item to trade!</label>
            <select value={buyerFoodID} onChange={handleChange}>
                {userFoods.map(foodListing => {
                    return <option value = {foodListing.id}> 
                        {foodListing.name} from {foodListing.user.name}
                    </option>
                })}
            </select>
            <input type='submit' value = 'submit'></input>
            </form>
        </div>
    )

}
export default FoodListingDetailedView;