import React, {useState} from 'react' 
import FoodListingDetailedView from './FoodListingDetailedView'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'






function FoodListingCard({currentUser,onDelete,id,image,name,description, user,cuisine,foodListings,handleUpdateRender,handleNewTrade}){

    const [hidden, setHidden] = useState(true)
    console.log(id)
    const userTruth=(currentUser === user.id)


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
<Col className="container-fluid mt-4">
            <Card style={{ width: '18rem'  } } className="glow">
  <Card.Img class="cardImage" variant="top" src={image}/>
  <Card.Body className="glow">
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    {userTruth && <Button size="sm" variant="danger" onClick={handleFoodDelete}>Delete Food </Button>}
            <Button size="sm"  variant="success" onClick={handleDetails}>Show Details </Button>
            {hidden? null: <FoodListingDetailedView userTruth={userTruth} currentUser={currentUser} handleNewTrade={handleNewTrade} id={id} description = {description} user={user} cuisine={cuisine} foodListings={foodListings}  handleUpdateRender = {handleUpdateRender} />}
  </Card.Body >
</Card>
</Col>
        </div>

           
    )
}
export default FoodListingCard